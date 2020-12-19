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

		// Send API of get batch submission to judge0
		let submissionTokensParams = ""
		batchSubmissionResponse.data.forEach(ele => {
			submissionTokensParams += `${ele.token},`
		})
		// const getSubmissionsResponse = await grader.get('/submissions/batch', {
		// 	params: {
		// 		base64_encoded: false,
		// 		tokens: submissionTokensParams
		// 	}
		// })

		res.status(201).send({ tokens: stringToBase64(submissionTokensParams) })
	} catch (error) {
        errorHandler(error, req, res)
    }
}

exports.getSubmission = async (req, res) => {
	try {
		const userId = '9c2822a0-cf80-487c-9189-a4682916d2b5'
		const tokens = base64ToString(req.query.tokens)
		const getSubmissionsResponse = await grader.get('/submissions/batch', {
			params: {
				base64_encoded: false,
				tokens
			}
		})
		res.send(getSubmissionsResponse.data)
	} catch (error) {
		errorHandler(error, req, res)
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