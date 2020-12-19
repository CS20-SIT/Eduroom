const AdmZip = require('adm-zip')
const { default: axios } = require('axios')
const pool = require('../database/db')
const errorHandler = require('../middleware/error')
const { grader } = require('../utils/graderAPI')
const { base64ToString, stringToBase64 } = require('../utils/base64')

exports.pingGrader = async (req, res) => {
	const response = await grader.get('/about')
	res.send(response.data)
}

exports.createSubmission = async (req, res) => {
	try {
		const userId = '9c2822a0-cf80-487c-9189-a4682916d2b5'
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
		// fileWriter.on('close', () => res.send('done 2'))
		const testcaseZip = new AdmZip(testcaseZipBuffer)
		const testcaseEntries = testcaseZip.getEntries()
		const testcaseNumber = testcaseEntries.length / 2
		const testcaseInput = []
		const testcaseOutput = []
		testcaseEntries.forEach(entry => {
			const fileName = entry.entryName.split('.')
			const index = parseInt(fileName[0], 10) - 1
			const data = entry.getData().toString('utf8')
			if(fileName[1] === 'in'){
				testcaseInput[index] = data
			} else {
				testcaseOutput[index] = data
			}
		})
		
		// Construct and request body, Send API of batch submission to judge0
		const languageId = getLanguage_id(language)
		const submissionRequestBody = {
			submissions: []
		}
		for(let i=0; i<testcaseNumber; i++){
			const submission = {
				source_code: sourceCode,
				language_id: languageId,
				stdin: stringToBase64(testcaseInput[i]),
				expected_output: stringToBase64(testcaseOutput[i])
			}
			submissionRequestBody.submissions.push(submission)
		}
		const batchSubmissionResponse = await grader.post('/submissions/batch?base64_encoded=true', submissionRequestBody)
		let submissionTokensParams = ""
		batchSubmissionResponse.data.forEach(ele => {
			submissionTokensParams += `${ele.token},`
		})

		await pool.query(`INSERT INTO question_attempt (userid, questionid, score, status, time, memory, language, code, whentime) VALUES ('${userId}',${problemId},0,'Pending',0,0,'${language}','${sourceCode}',CURRENT_TIMESTAMP);`)
		const attemptId = await pool.query(`SELECT attempno FROM question_attempt WHERE code = '${sourceCode}' AND userid = '${userId}' AND status = 'Pending' ORDER BY whentime DESC LIMIT 1;`)

		const insertQuestionAttempTestcase = []
		for(let i=0; i<testcaseNumber; i++){
			const queryPromise = pool.query(`INSERT INTO question_attempt_testcase (attemptid, testcaseno, status, memory, time, score) VALUES (${attemptId.rows[0].attempno},${i+1},'Pending',0,0,0);`) 
			insertQuestionAttempTestcase.push(queryPromise)
		}
		await Promise.all(insertQuestionAttempTestcase)

		res.status(201).send({ 
			attemptId: attemptId.rows[0].attempno,
			tokens: stringToBase64(submissionTokensParams) 
		})
	} catch (error) {
        errorHandler(error, req, res)
    }
}

exports.getSubmission = async (req, res) => {
	try {
		const userId = '9c2822a0-cf80-487c-9189-a4682916d2b5'
		const { attemptId } = req.query
		const tokens = base64ToString(req.query.tokens)
		// Send API of get batch submission to judge0
		const getSubmissionsResponse = await grader.get('/submissions/batch', {
			params: {
				base64_encoded: true,
				tokens
			}
		})
		const testcaseNumber = getSubmissionsResponse.data.submissions.length
		const scorePerTestcase = 10
		console.log(`SELECT ruletype, timelimit, memorylimit FROM questions INNER JOIN question_attempt qa on questions.id = qa.questionid WHERE qa.attemptid = ${attemptId}`);
		const questionTypeQuery = await pool.query(`SELECT ruletype, timelimit, memorylimit FROM questions INNER JOIN question_attempt qa on questions.id = qa.questionid WHERE qa.attemptid = ${attemptId}`)
		console.log(questionTypeQuery.rows[0]);
		const { ruletype, timelimit, memorylimit } = questionTypeQuery.rows[0]

		// Check submission result
		let totalScore = 0
		const submissionResults = {
			correctAnswer: 0,
			wrongAnswer: 0,
			compileError: 0,
			timeExceed: 0,
			memoryExceed: 0,
			runtimeError: 0
		}
		let isAllAccepted = true
		const results = getSubmissionsResponse.data.submissions.map(submission => {
			// Check submission status
			if(submission.status.id !== 3){
				if(submission.status.id === 4) submissionResults.wrongAnswer += 1
				else if(submission.status.id === 6) submissionResults.compileError += 1
				else submissionResults.runtimeError += 1
				isAllAccepted = false
				return {
					status: getSubmissionStatus(submission.status.id),
					memory: submission.memory,
					time: submission.time,
					// compile_output: submission.compile_output,
					// stderr: submission.stderr,
					score: 0
				}
			}
			if(parseFloat(submission.time) > timelimit){
				submissionResults.timeExceed += 1
				isAllAccepted = false
				return {
					status: getSubmissionStatus(5),
					memory: submission.memory,
					time: submission.time,
					score: 0
				}
			}
			if(submission.memory/1024 > memorylimit){
				submissionResults.memoryExceed += 1
				isAllAccepted = false
				return {
					status: getSubmissionStatus(99),
					memory: submission.memory,
					time: submission.time,
					score: 0
				}
			}
			totalScore += scorePerTestcase
			submissionResults.correctAnswer += 1
			return {
				status: getSubmissionStatus(3),
				memory: submission.memory,
				time: submission.time,
				score: scorePerTestcase
			}
		})

		let overallResult = 'Wrong Answer'
		if(submissionResults.correctAnswer === testcaseNumber) overallResult = 'Accepted'
		else if(submissionResults.correctAnswer !== 0) overallResult = 'Partial Accepted'
		else if(submissionResults.compileError === testcaseNumber) overallResult = 'Compilation Error'
		else if(submissionResults.memoryExceed === testcaseNumber) overallResult = 'Memory Limit Exceeded'
		else if(submissionResults.timeExceed === testcaseNumber) overallResult = 'Time Limit Exceeded'
		else if(submissionResults.runtimeError === testcaseNumber) overallResult = 'Runtime Error'

		if(ruletype === 'acm' && isAllAccepted === false){
			totalScore = 0
		}

		// Update question_attempt_testcase table
		// await pool.query(`UPDATE question_attempt_testcase SET time = '', memory = '', score = '', status = '' WHERE attemptid = '' AND testcaseno = '';`)

		res.send({ 
			score: totalScore, 
			results: overallResult
		})
	} catch (error) {
		errorHandler(error, req, res)
	}
}



const getSubmissionStatus = (id) => {
	switch (id) {
		case 1:
			return 'Pending'
		case 2:
			return 'Pending'
		case 3:
			return 'Accepted'
		case 4:
			return 'Wrong Answer'
		case 5:
			return 'Time Limit Exceeded'
		case 6:
			return 'Compilation Error'
		case 13:
			return 'Internal Error'
		case 99:
			return 'Memory Limit Exceeded'
		default:
			return 'Runtime Error'
	}
}

const getLanguage_id = (lang) => {
	switch (lang) {
		case 'Java':
			return 62
		case 'C':
			return 50
		case 'C++':
			return 54
		case 'Python 3':
			return 71
		case 'Python 2':
			return 70
		default:
			return 62
	}
}