const { default: Axios } = require('axios')

const grader = Axios.create({
	baseURL: process.env.GRADER_URL,
})

module.exports = {
	grader,
}
