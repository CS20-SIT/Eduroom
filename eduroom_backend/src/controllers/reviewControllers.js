const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
exports.getReview = async (req, res, next) => {
	const id = req.query.courseid
	const data = await pool.query('select * from package where packageid = $1', [id])
	const reviewInfo = data.rows
	res.status(200).json({ data: reviewInfo })
}
exports.selectCourse = async (req, res, next) => {
	const id = req.params.id
	console.log('id is ', id)
	const data = await pool.query(
		'select * form review_course  ',
		[id]
	)
	const review = data.rows[0]
	const comment = data2.rows
	console.log(review)
	res.status(200).json({ data: { review, comment } })
}