const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.getCategories = async (req, res, next) => {
	try {
		const results = await pool.query('SELECT * from package_category')
		const categories = results.rows.map((el) => {
			return { value: el.cateid, label: el.cate_name }
		})
		res.send(categories)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
exports.createPackage = async (req, res, next) => {
	try {
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
			await pool.query('INSERT INTO package_courses(packageid,courseid) VALUES($1,$2)', [packageid, courses[i]])
		}
		res.send(results.rows[0])
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.deletePackage = async (req, res, next) => {
	try {
		const { packageid } = req.body
		await pool.query(`DELETE FROM package_courses where packageid = $1`, [packageid])
		await pool.query(`DELETE FROM package where packageid = $1`, [packageid])
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getPackage = async (req, res, next) => {
	try {
		const id = req.query.packageid
		const data1 = await pool.query(`select p.packageid, packagename, i.instructorid,firstname,lastname ,p.discount,p.detail,p.image,sum(price)*((100-p.discount)/100) as price
		, sum(price) as oldprice
		from package p, instructor i,package_courses pc, course c, user_profile up
		where p.instructorid=i.instructorid and p.packageid = pc.packageid and pc.courseid=c.courseid
		  and i.userid = up.userid and p.packageid = $1
		group by p.packageid,i.instructorid,firstname,lastname`, [id])

		const data3 = await pool.query(`select pc.courseid, coursename, firstname, lastname,c.coursepicture, up.avatar
		from package_courses pc, course c,user_profile up, instructor i
		where pc.packageid = $1 and pc.courseid = c.courseid
		  and c.ownerid = i.instructorid and i.userid = up.userid`, [id])
		
		  const data4 = await pool.query(`SELECT firstname,lastname, up.avatar as avatar, count(coursename)
		from course c join instructor i on c.ownerid = i.instructorid join user_profile up on up.userid = i.userid
		where c.ownerid in (select ownerid from package_courses join course c2 on package_courses.courseid = c2.courseid
		where packageid = $1) group by firstname, lastname, up.avatar`, [id])

		res.send({ packages: data1.rows[0],courseCount: data3.rowCount, instructorList: data4.rows, courseList: data3.rows })
	} catch (err) {
		console.log(err)
		return next(new ErrorResponse(err, 500))
	}
}



exports.getAllPackage = async (req, res, next) => {
	try {
		const data = await pool.query(
			` select sum(price) * ((100 - p.discount) / 100) as price,p.packageid,packagename,p.discount,p.ispublic,p.detail,p.cateid,p.image,ca.cate_name,u.firstname,u.lastname
			from package p,package_courses pc,course c,package_category ca,user_profile u,instructor i
			where p.packageid = pc.packageid and c.courseid = pc.courseid and p.cateid = ca.cateid and p.instructorid = i.instructorid and i.userid = u.userid and ispublic = true
			group by p.packageid, ca.cate_name,u.firstname,u.lastname`
		)
		const packageInfo = data.rows
		const temp = packageInfo.map((pack) => {
			return {
				id: pack.packageid,
				title: pack.packagename,
				instructor: pack.instructorid,
				detail: pack.detail,
				image: pack.image,
				discount: pack.discount,
				public: pack.ispublic,
				cateid: pack.cateid,
				infname: pack.firstname,
				inlname: pack.lastname,
				price: parseFloat(pack.price).toFixed(2)
			}
		})
		res.send(temp)
	} catch (error) {
		return next(new ErrorResponse(error, 500))
	}
}

exports.getCourses = async (req, res, next) => {
	try {
		const { page, mxData } = req.query
		const offset = (page - 1) * mxData
		const results = await pool.query(
			'SELECT courseid, coursename, coursepicture, price from course offset $1 limit $2',
			[offset, mxData]
		)
		const rows = results.rows.map((course) => {
			return { ...course, price: parseFloat(course.price) }
		})
		res.send(rows)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getCoursesOfCreatingPackage = async (req, res, next) => {
	try {
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
		res.send({ courses, totalPrice: sum })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getNumCourses = async (req, res, next) => {
	try {
		const result = await pool.query('select count(*) as count from course')
		res.status(200).send({ count: parseInt(result.rows[0].count) })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getInstructorPackage = async (req, res, next) => {
	try {
		const instructorid = req.user.instructor
		const result = await pool.query(
			`select sum(price)*((100-p.discount)/100) as price,p.packageid,packagename,p.discount,p.ispublic,p.detail,p.cateid, p.image, ca.cate_name
		from package p,package_courses pc,course c, package_category ca
			where p.packageid = pc.packageid
				and p.instructorid = $1
			and c.courseid = pc.courseid
			and p.cateid = ca.cateid
			group by p.packageid,ca.cate_name`,
			[instructorid]
		)
		res.send(result.rows)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.publishPackage = async (req, res, next) => {
	const packageId = req.body.packageid
	try {
		const result = await pool.query('UPDATE package SET ispublic = true where packageid = $1 RETURNING *', [
			packageId,
		])
		res.send({ success: true, packages: result.rows[0] })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.upload = async (req, res, next) => {
	try {
		const file = req.files[0]
		const result = { linkUrl: file.linkUrl, fieldname: file.fieldname }
		res.send(result)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getCourseFromIds = async (req, res, next) => {
	const courseIds = req.query.ids
	try {
		const results = await pool.query(
			`select c.courseid as id,c.coursename as name,c.price as price, c.coursepicture as picture, u.firstname,u.lastname from course c, instructor i, user_profile u
			where i.instructorid = c.ownerid and i.userid = u.userid and c.courseid = any ($1)
			`,
			[courseIds]
		)
		const answer = results.rows.map((el) => {
			return { ...el, price: parseFloat(el.price) }
		})
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getPackagesFromIds = async (req, res, next) => {
	const packageIds = req.query.ids
	try {
		const results = await pool.query(
			`select p.packageid as id ,p.packagename as name,u.firstname as firstname, u.lastname as lastname, sum(c.price)*((100-p.discount)/100) as price, p.image as picture
		from package p, package_courses pc, course c, instructor i, user_profile u
		where p.instructorid = i.instructorid and i.userid = u.userid and c.courseid = pc.courseid and pc.packageid = p.packageid and p.packageid = ANY ($1)
		group by p.packageid,p.packagename,u.firstname, u.lastname`,
			[packageIds]
		)
		const answer = results.rows.map((el) => {
			return { ...el, price: parseFloat(el.price) }
		})
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
