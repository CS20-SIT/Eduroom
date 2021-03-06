const AdmZip = require('adm-zip')
const { default: axios } = require('axios')
const pool = require('../database/db')
const errorHandler = require('../middleware/error')
const { grader } = require('../utils/graderAPI')
const { base64ToString, stringToBase64 } = require('../utils/base64')
const { getLanguageId, getSubmissionStatus } = require('../utils/grader')

const sleep = (ms) => {
	return new Promise(resolve =>  setTimeout(resolve, ms))
}

const getSubmissionUntilAllDone = async (tokens) => {
	let resultPending = false 
	let getSubmissionsResponse
	do {
		resultPending = false 
		getSubmissionsResponse = await grader.get('/submissions/batch', {
			params: {
				base64_encoded: true,
				tokens,
			},
		})
		const testcaseNumber = getSubmissionsResponse.data.submissions.length
		const {submissions} = getSubmissionsResponse.data
		for(let i=0; i<testcaseNumber; i+=1){
			if(submissions[i].status.id < 3){
				resultPending = true
			}
		}
		if(resultPending){
			await sleep(2000)
		}
	}
	while(resultPending)

	return getSubmissionsResponse
}

exports.pingGrader = async (req, res) => {
	const response = await grader.get('/about')
	res.send(response.data)
}

exports.createSubmission = async (req, res) => {
	try {
		const userId = req.user.id
		const { source_code: sourceCode, problem_id: problemId, language } = req.body

		// Get URL to the zipped testcase
		const testCaseZipResponse = await pool.query(
			`SELECT filepath FROM questiontestcases WHERE questionid = ${problemId}`
		)
		if (testCaseZipResponse.rowCount === 0) {
			const err = {
				statusCode: 400,
				message: 'Problem_id is not valid',
			}
			return errorHandler(err, req, res)
		}
		const testCaseZipURL = testCaseZipResponse.rows[0].filepath

		// Download testcase, get testcase, put them in array (testcaseInput, testcaseOutput)
		const testCaseFileResponse = await axios({
			url: testCaseZipURL,
			method: 'GET',
			responseType: 'arraybuffer',
		})
		const testcaseZipBuffer = Buffer.from(testCaseFileResponse.data, 'binary')
		const testcaseZip = new AdmZip(testcaseZipBuffer)
		const testcaseEntries = testcaseZip.getEntries()
		const testcaseNumber = testcaseEntries.length / 2
		const testcaseInput = []
		const testcaseOutput = []
		testcaseEntries.forEach((entry) => {
			const fileName = entry.entryName.split('.')
			const index = parseInt(fileName[0], 10) - 1
			const data = entry.getData().toString('utf8')
			if (fileName[1] === 'in') {
				testcaseInput[index] = data
			} else {
				testcaseOutput[index] = data
			}
		})

		// Construct and request body
		const languageId = getLanguageId(language)
		const submissionRequestBody = {
			submissions: [],
		}
		for (let i = 0; i < testcaseNumber; i += 1) {
			const submission = {
				source_code: sourceCode,
				language_id: languageId,
				stdin: stringToBase64(testcaseInput[i]),
				expected_output: stringToBase64(testcaseOutput[i]),
			}
			submissionRequestBody.submissions.push(submission)
		}

		// Send API of batch submission to judge0
		const batchSubmissionResponse = await grader.post(
			'/submissions/batch?base64_encoded=true',
			submissionRequestBody
		)
		let submissionTokensParams = ''
		batchSubmissionResponse.data.forEach((ele) => {
			submissionTokensParams += `${ele.token},`
		})

		// Insert question_attempt and question_attempt_testcase
		await pool.query(
			`INSERT INTO question_attempt (userid, questionid, score, status, time, memory, language, code, whentime) VALUES ('${userId}',${problemId},0,'Pending',0,0,'${language}','${sourceCode}',CURRENT_TIMESTAMP);`
		)
		const attemptId = await pool.query(
			`SELECT attempno FROM question_attempt WHERE code = '${sourceCode}' AND userid = '${userId}' AND status = 'Pending' ORDER BY whentime DESC LIMIT 1;`
		)

		const insertQuestionAttempTestcase = []
		for (let i = 0; i < testcaseNumber; i += 1) {
			const queryPromise = pool.query(
				`INSERT INTO question_attempt_testcase (attemptid, testcaseno, status, memory, time, score) VALUES (${
					attemptId.rows[0].attempno
				},${i + 1},'Pending',0,0,0);`
			)
			insertQuestionAttempTestcase.push(queryPromise)
		}
		await Promise.all(insertQuestionAttempTestcase)

		return res.status(201).send({
			attemptId: attemptId.rows[0].attempno,
			tokens: stringToBase64(submissionTokensParams),
		})
	} catch (error) {
		return errorHandler(error, req, res)
	}
}

exports.getSubmission = async (req, res) => {
	try {
		const userId = req.user.id
		const { attemptId } = req.query
		const tokens = base64ToString(req.query.tokens)

		const scorePerTestcase = 10
		const questionTypeQuery = await pool.query(
			`SELECT ruletype, timelimit, memorylimit FROM questions INNER JOIN question_attempt qa on questions.id = qa.questionid WHERE qa.attemptid = ${attemptId} AND qa.userid = '${userId}' AND qa.status = 'Pending'`
		)

		if (questionTypeQuery.rowCount === 0) { 
			const err = {
				statusCode: 400,
				message: 'Question attempt is already checked',
			}
			return errorHandler(err, req, res)
		}
		const { ruletype, timelimit, memorylimit } = questionTypeQuery.rows[0]

		// Send API of get batch submission to judge0
		const getSubmissionsResponse = await getSubmissionUntilAllDone(tokens)
		

		// Check submission result
		const testcaseNumber = getSubmissionsResponse.data.submissions.length
		const updateAttempPromise = []
		let totalScore = 0
		let overallTime = 0
		let overallMemory = 0
		const submissionResults = {
			correctAnswer: 0,
			wrongAnswer: 0,
			compileError: 0,
			timeExceed: 0,
			memoryExceed: 0,
			runtimeError: 0,
		}
		let isAllAccepted = true
		for (let i = 0; i < testcaseNumber; i += 1) {
			const submission = getSubmissionsResponse.data.submissions[i]

			// Check submission status
			const memory = submission.memory === null ? 0 : submission.memory / 1024
			const time = submission.time === null ? 0 : parseFloat(submission.time) * 1000
			let status = 'Error'
			let score = 0

			overallTime += time
			overallMemory += memory

			if (submission.status.id !== 3) {
				if (submission.status.id === 4) submissionResults.wrongAnswer += 1
				else if (submission.status.id === 6) submissionResults.compileError += 1
				else submissionResults.runtimeError += 1

				isAllAccepted = false
				status = getSubmissionStatus(submission.status.id)
			} else if (time > timelimit) {
				submissionResults.timeExceed += 1

				isAllAccepted = false
				status = getSubmissionStatus(5)
			} else if (memory / 1024 > memorylimit) {
				submissionResults.memoryExceed += 1

				isAllAccepted = false
				status = getSubmissionStatus(99)
			} else {
				submissionResults.correctAnswer += 1
				score = scorePerTestcase
				totalScore += scorePerTestcase
				status = getSubmissionStatus(3)
			}
			updateAttempPromise.push(
				pool.query(
					`UPDATE question_attempt_testcase SET time = ${time}, memory = ${memory}, score = ${score}, status = '${status}' WHERE attemptid = ${attemptId} AND testcaseno = ${
						i + 1
					};`
				)
			)
		}

		let overallStatus = 'Wrong Answer'
		if (submissionResults.correctAnswer === testcaseNumber) overallStatus = 'Accepted'
		else if (submissionResults.correctAnswer !== 0) overallStatus = 'Partial Accepted'
		else if (submissionResults.compileError === testcaseNumber) overallStatus = 'Compilation Error'
		else if (submissionResults.memoryExceed === testcaseNumber) overallStatus = 'Memory Limit Exceeded'
		else if (submissionResults.timeExceed === testcaseNumber) overallStatus = 'Time Limit Exceeded'
		else if (submissionResults.runtimeError === testcaseNumber) overallStatus = 'Runtime Error'

		if (ruletype === 'acm' && isAllAccepted === false) {
			totalScore = 0
		}
		overallMemory = Math.round(overallMemory / testcaseNumber)
		overallTime = Math.round(overallTime / testcaseNumber)

		// Update question_attempt_testcase and question_attempt table
		updateAttempPromise.push(
			pool.query(
				`UPDATE question_attempt SET score = ${totalScore}, status = '${overallStatus}', time = ${overallTime}, memory = ${overallMemory} WHERE attemptid = ${attemptId} AND userid = '${userId}';`
			)
		)
		await Promise.all(updateAttempPromise)

		return res.send({
			score: totalScore,
			status: overallStatus,
			time: overallTime,
			memory: overallMemory,
		})
	} catch (error) {
		return errorHandler(error, req, res)
	}
}


