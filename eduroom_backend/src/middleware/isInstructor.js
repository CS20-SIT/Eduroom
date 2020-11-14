const pool = require('../database/db')
const ErrorResponse = require('../utils/errorResponse')

const isInstructor = async (req, res, next) => {
	console.log('inside instructor');
	console.log(req.user.instructor);
	return next();
// 	const userId = req.user.user
// 	console.log('user id = ', userId);
// 	const result = await pool.query('SELECT isverified from instructor where userid = $1', [userId])
// 	console.log(result);
// 	const isverified = result.rows[0].isverified
// 	if (isverified) {
// 		return next();
// 	} else {
// 		return next(new ErrorResponse('You are not an instructor', 400))
// 	}
}

module.exports = {
	isInstructor,
}
