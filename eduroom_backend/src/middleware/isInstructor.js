const pool = require('../database/db')
const ErrorResponse = require('../utils/errorResponse')

const isInstructor = async (req, res, next) => {
	const instructorId = req.user.instructor
	const result = await pool.query('SELECT isverified from instructor where instructorid = $1', [instructorId])
	if (result.rowCount === 0) {
		return next(new ErrorResponse("You did not register as an instructor", 400));
	}
	if (result.rows[0].isverified) {
		return next();
	} else {
		return next(new ErrorResponse("You are not a verified instructor", 400));
	}
}

module.exports = {
	isInstructor,
}
