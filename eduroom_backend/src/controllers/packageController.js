const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const errorHandler = require('../middleware/error');

exports.getCategories = async (req, res, next) => {
	const results = await pool.query('SELECT * from package_category')
	const categories = results.rows.map((el) => {
		return { value: el.cateid, label: el.cate_name }
	})
	res.send(categories)
}
exports.createPackage = async (req, res, next) => {
	const instructorId = req.user.instructor
	let data = req.body
	data.category = parseInt(data.category)
	const results = await pool.query(
		'INSERT INTO package(packagename, instructorid, discount, ispublic,detail,image,cateid) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
		[data.name, instructorId, data.discount, data.ispublic, data.detail, data.image, data.category]
	)
	const { packageid } = results.rows[0]
	const { courses } = req.body
	for (let i = 0; i < courses.length; i++) {
		const result = await pool.query('INSERT INTO package_courses(packageid,courseid) VALUES($1,$2)', [
			packageid,
			courses[i],
		])
	}
	res.send(results.rows[0])
}

exports.deletePackage = async (req, res, next) => {
	const { packageid } = req.body
	console.log('id is ', packageid)
	await pool.query(`DELETE FROM package_courses where packageid = $1`, [packageid])
	await pool.query(`DELETE FROM package where packageid = $1`, [packageid])
	res.send({ success: true })
}

exports.getPackage = async (req, res, next) => {
	const id = req.query.packageid
	const data = await pool.query('select * from package where packageid = $1', [id])
	const packageInfo = data.rows
	res.status(200).json({ data: packageInfo })
}

exports.getAllPackage = async (req, res, next) => {
	try {
		const data = await pool.query('select * from instructor join user_profile up on instructor.userid = up.userid join package p on instructor.instructorid = p.instructorid where ispublic = true')
		const packageInfo = data.rows;
		const temp = packageInfo.map(package => {
			return {
				id: package.packageid,
				title: package.packagename,
				instructor: package.instructorid,
				detail: package.detail,
				image: package.image,
				discount: package.discount,
				public: package.ispublic,
				cateid: package.cateid,
				infname: package.firstname,
				inlname: package.lastname,
			};
		});
		res.status(200).json(temp);
	} catch (error) {
		errorHandler(error, req, res);
	}
};

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
