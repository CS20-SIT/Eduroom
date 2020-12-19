const pool = require('../database/db')
const { grader } = require('../utils/graderAPI')

exports.testGrader = async (req, res) => {
	const response = await grader.get('/system_info')
	res.send(response.data)
}
