const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.getCategories = async (req, res, next) => {
	const results = await pool.query('SELECT * from package_category')
	const categories = results.rows.map((el) => {
		return { value: el.cateid, label: el.cate_name }
	})
	res.send(categories)
}
exports.createPackage = async (req, res, next) => {
	const instructorId = req.user.instructor
	console.log('id is ', instructorId)
	let data = req.body
	data.category = parseInt(data.category)
	console.log('data is ', data)
	const results = await pool.query(
		'INSERT INTO package(packagename, instructorid, discount, ispublic,detail,image,cateid) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
		[data.name, instructorId, data.discount, data.ispublic, data.detail, data.image, data.category]
	)
	console.log('result is')
	console.log(results.rows[0])
	const { packageid } = results.rows[0]
	const { courses } = req.body
	for (let i = 0; i < courses.length; i++) {
		const result = await pool.query('INSERT INTO package_courses(packageid,courseid) VALUES($1,$2)', [
			packageid,
			courses[i],
		])
		console.log('insert ', courses[i], ' success')
	}
	res.send(results.rows[0])
}

exports.getPackage = async (req, res, next) => {
	const id = req.query.packageid
	const data = await pool.query('select * from package where packageid = $1', [id])
	const packageInfo = data.rows
	res.status(200).json({ data: packageInfo })
}

exports.getCourses = async (req, res, next) => {
	const { page, mxData } = req.query
	const offset = (page - 1) * mxData
	const results = await pool.query(
		'SELECT courseid, coursename, coursepicture, price from course offset $1 limit $2',
		[offset, mxData]
	)
	const rows = results.rows.map((course) => {
		return { ...course, price: parseFloat(course.price) }
	})
	res.status(200).send(rows)
}

exports.getCoursesOfCreatingPackage = async (req, res, next) => {
	const courseIds = req.query.courseIds
	let courses = []
	let sum = 0
	for (let i = 0; i < courseIds.length; i++) {
		const result = await pool.query(
			'SELECT courseid, coursename, coursepicture, price from course where courseid = $1',
			[courseIds[i]]
		)
		if (result.rowCount) {
			sum += parseFloat(result.rows[0].price)
			courses.push(result.rows[0])
		}
	}
	res.status(200).send({ courses, totalPrice: sum })
}

exports.getNumCourses = async (req, res, next) => {
	const result = await pool.query('select count(*) as count from course')
	res.status(200).send({ count: parseInt(result.rows[0].count) })
}

exports.getInstructorPackage = async (req, res, next) => {
	const instructorid = req.user.instructor
	const result = await pool.query(
		`select sum(price)*((100-p.discount)/100) as price,p.packageid,packagename,p.discount,p.ispublic,p.detail,p.cateid, p.image, ca.cataname
		from package p,package_courses pc,course c, categories ca
			where p.packageid = pc.packageid
				and p.instructorid = $1
			and c.courseid = pc.courseid
			and p.cateid = ca.cataid
			group by p.packageid,ca.cataname`,
		[instructorid]
	)
	res.send(result.rows)
}

exports.publishPackage = async (req, res, next) => {
	const packageId = req.body.packageid
	try {
		const result = await pool.query('UPDATE package SET ispublic = true where packageid = $1 RETURNING *', [
			packageId,
		])
		res.send({ success: true, packages: result.rows[0] })
	} catch (err) {
		console.log(err)
		res.status(500).send(err)
	}
}

exports.upload = async (req, res, next) => {
	const file = req.files[0]
	const result = { linkUrl: file.linkUrl, fieldname: file.fieldname }
	console.log(result)
	res.send(result)
}
