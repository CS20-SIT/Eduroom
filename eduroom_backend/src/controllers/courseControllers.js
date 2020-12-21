const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.getAllCourse = async (req, res) => {
	try {
		const {
			rows,
		} = await pool.query(`select * from course,instructor i,user_profile up, categories, course_categories cocat
        where course.ownerid = i.instructorid and i.userid = up.userid and
              course.courseid = cocat.courseid and cocat.cataid = categories.cataid;`)
		if (!rows) res.status(400).send({ msg: 'Not Found' })
		res.status(200).send(rows)
	} catch (err) {
		res.status(400).send(err.message)
	}
}
exports.getCourseFromID = async (req, res, next) => {
	try {
		const userid = req.user.id
		const courseid = req.query.courseID
		const result = await pool.query(`SELECT * FROM course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid
        WHERE course.courseid = '${courseid}'`)
		if (result.rowCount === 0) return res.status(400).send({ msg: 'Not Found' })
		const answer = result.rows[0]
		answer.isOwn = false
		const isOwnResult = await pool.query(`SELECT userid from user_mycourse where userid = $1 and courseid = $2`, [
			userid,
			courseid,
		])
		if (isOwnResult.rowCount > 0) {
			answer.isOwn = true
		}
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
exports.getCourseSectionPart = async (req, res) => {
	console.log(req.body.courseID, 'rty')
	try {
		const { rows } = await pool.query(`SELECT * FROM course
        join course_section cs on course.courseid = cs.courseid
        join course_quiz cq on course.courseid = cq.courseid
        join course_section_part_material cspm on course.courseid = cspm.courseid
        WHERE course.courseid = '6714b449-03fe-41ae-9d91-60438d8ebf51'`)

		if (!rows) res.status(404).send({ msg: 'Not Found' })
		res.status(200).send(rows)
	} catch (err) {
		console.log(err.message)
		res.status(400).send(err.message)
	}
}
exports.searchCourse = async (req, res, next) => {
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
exports.getCategory = async (req, res, next) => {
	const data = await pool.query('SELECT cataname from categories')
	res.status(200).json({ success: true, category: data.rows })
}

exports.searchCategory = async (req, res, next) => {
	const cataname = req.params.cataname
	if (cataname) {
		const data = await pool.query(
			`select * from course,instructor i,user_profile up, categories, course_categories cocat
            where course.ownerid = i.instructorid and i.userid = up.userid and
                  course.courseid = cocat.courseid and cocat.cataid = categories.cataid and cataname = $1`,
			[cataname]
		)
		const course = data.rows
		res.status(200).json({ success: true, data: course })
	} else {
		return next(new ErrorResponse('Not Found', 404))
	}
}

//course shop page
exports.getCourse = async (req, res, next) => {
	try {
		const data = await pool.query(`select u.firstname,u.lastname, c.coursename, c.coursepicture,c.price,c.courseid
        from course c , instructor i, user_profile u 
        where i.userid = u.userid and c.status = 'Approved' 
        and i.instructorid = c.ownerid `)
		const courseInfo = data.rows
		const temp = courseInfo.map((course) => {
			return {
				id: course.courseid,
				title: course.coursename,
				owner: course.ownerid,
				image: course.coursepicture,
				infname: course.firstname,
				inlname: course.lastname,
				price: parseFloat(course.price).toFixed(2),
			}
		})
		res.status(200).json(temp)
	} catch (err) {
		console.log(err.message)
		res.status(400).send(err.message)
	}
}
