const axios = require('axios')

const axiosGraderOptions = {
	baseURL: process.env.GRADER_URL,
}

const grader = axios.create(axiosGraderOptions)

module.exports = { grader }
