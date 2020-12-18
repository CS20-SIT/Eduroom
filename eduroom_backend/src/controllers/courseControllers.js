const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

const getAllCourse = async (req, res) => {
	try {
		const { rows } = await pool.query(`select * from course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid`)

		if (!rows) res.status(404).send({ msg: 'Not Found' })

		res.status(200).send(rows)
	} catch (err) {
		res.status(400).send(err.message)
	}
}

const getCourseFromID = async (req, res) => {
	try {
		const courseID = req.query.courseID
		const result = await pool.query(
			`SELECT * FROM course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid
        WHERE course.courseid = $1`,
			[courseID]
        )
        
		if (result.rowCount > 0) {
			return res.status(200).send(result.rows[0])
		} else {
			res.send(null)
		}
	} catch (err) {
		console.log(err.message)
		res.status(400).send(err.message)
	}
}

const getCourseSectionPart = async (req, res) => {
	console.log(req.body.courseID, 'rty')
	try {
		const { rows } = await pool.query(`SELECT * FROM course
        join course_section cs on course.courseid = cs.courseid
        join course_quiz cq on course.courseid = cq.courseid
        join course_section_part_material cspm on course.courseid = cspm.courseid
        WHERE course.courseid = '6714b449-03fe-41ae-9d91-60438d8ebf51'`)

		if (!rows) res.status(404).send({ msg: 'Not Found' })

		console.log(rows)

		res.status(200).send(rows)
	} catch (err) {
		console.log(err.message)
		res.status(400).send(err.message)
	}
}

const searchCourse = async (req, res, next) => {
	const search = req.body.search
	const user = req.user
	if (search) {
		const data = await pool.query(
			'select * from course join instructor i on course.ownerid = i.instructorid join user_profile up on i.userid = up.userid WHERE UPPER(coursename) LIKE $1',
			['%' + search.toUpperCase() + '%']
		)
		const course = data.rows
		res.status(200).json({ success: true, data: course })
	} else {
		return next(new ErrorResponse('Not Found', 404))
	}
}

module.exports = {
	getAllCourse,
	getCourseFromID,
	getCourseSectionPart,
	searchCourse,
}
