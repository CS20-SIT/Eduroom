const pool = require('../database/db')

const isRegisterInstructor = async (req, res, next) => {
	const userId = req.user.id
	console.log('user id = ', userId)
	const result = await pool.query('SELECT instructorid from instructor where userid = $1', [userId])
	if (result.rowCount === 0) {
		res.send({ role: 'student' })
	} else {
		req.user.instructor = result.rows[0].instructorid
		return next()
	}
}

module.exports = {
	isRegisterInstructor,
}
