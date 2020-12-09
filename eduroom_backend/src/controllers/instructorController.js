const pool = require('../database/db')
const { v4: uuidv4 } = require('uuid')

exports.Register = async (req, res, next) => {
	const data = req.body
	const userId = req.user.id

	//check whether this user already reguster
	const userRows = await pool.query('SELECT userId from instructor where userid = $1', [userId])
	if (userRows.rowCount > 0) {
		res.status(200).json({ success: false, err: 'This user already register' })
		return
	}

	await pool.query('INSERT INTO instructor(userid,biography) VALUES ($1,$2)', [userId, data.bio])
	const result = await pool.query('SELECT instructorid FROM instructor WHERE userid = $1 ', [userId])
	const id = result.rows[0].instructorid
	await pool.query('INSERT INTO instructor_degree(instructorid,degree_name,evidence) VALUES ($1,$2,$3)', [
		id,
		data.degree,
		'/certificate.png',
	])
	await pool.query(
		'INSERT INTO instructor_expert(instructorid,expertnumber,subjectname,evidence) VALUES ($1,$2,$3)',
		[id, '1', data.expert, '/certificate.png']
	)
	res.status(200).json({ success: true, data: data })
}

exports.GetProfile = async (req, res, next) => {
	const instructorId = req.user.instructor
	const result = await pool.query('SELECT isverified from instructor where instructorid = $1', [instructorId])
	const isverified = result.rows[0].isverified
	res.status(200).json({ role: 'instructor', isverified })
}

exports.GetProfileDetail = async (req, res, next) => {
	const instructorId = req.user.instructor
	const bioResult = await pool.query('SELECT biography from instructor where instructorid = $1', [instructorId])
	const expertResult = await pool.query('SELECT subjectname from instructor_expert where instructorid = $1', [
		instructorId,
	])
	const expert = expertResult.rows.map((ex) => {
		return ex.subjectname
	})

	const degreeResult = await pool.query('SELECT degree_name from instructor_degree where instructorid = $1', [
		instructorId,
	])
	const degree = degreeResult.rows.map((deg) => {
		return deg.degree_name
	})

	const result = { bio: bioResult.rows[0].biography, expert, degree }
	res.status(200).json(result)
}

exports.GetCourses = async (req, res, next) => {
	const instructorId = req.user.instructor
	const result = await pool.query('SELECT * from course where ownerid = $1', [instructorId])
	res.send(result.rows)
}

exports.GetCategories = async (req, res, next) => {
	const result = await pool.query('SELECT * from categories')
	res.send(result.rows)
}

exports.Upload = async (req, res, next) => {
	const file = req.files[0]
	const url = file.linkUrl
	console.log(url)
	res.send(req.files)
}

exports.CreateCourse = async (req, res, next) => {
	const instructorId = req.user.instructor
	const courseId = uuidv4()
	console.log(req.body)
	// const result = await pool.query(`insert into course(courseid,coursename, coursedescription, coursepicture, samplevideo, price, language, havecert, ownerid, status, certpath)
	// values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,[courseId])
	res.send({ courseId })
}
