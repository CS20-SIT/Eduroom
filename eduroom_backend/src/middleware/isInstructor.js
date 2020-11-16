const pool = require('../database/db')
const ErrorResponse = require('../utils/errorResponse')

const isInstructor = async (req, res, next) => {
	const userId = req.user.id
	const result = await pool.query('SELECT instructorid, isverified from instructor where userid = $1', [userId])
	if (result.rowCount === 0) {
		return next(new ErrorResponse('You did not register as an instructor', 400))
	}
	if (result.rows[0].isverified) {
		req.user.instructor = result.rows[0].instructorid
		return next()
	} else {
		return next(new ErrorResponse('You are not a verified instructor', 400))
	}
}

module.exports = {
	isInstructor,
}
