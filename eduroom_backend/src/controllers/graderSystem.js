const pool = require('../database/db')
const { grader } = require('../utils/graderAPI')

exports.pingGrader = async (req, res) => {
    const response = await grader.get('/about')
    res.send(response.data)
}
