const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.createPackage = async (req, res, next) => {
	const time = await pool.query('SELECT NOW()')
	const data = req.body
	res.status(200).json({ success: true, data: data })
	console.log(data)
	await pool.query(
		'INSERT INTO package(packagename, instructorid, discount, ispublic,detail) VALUES ($1,$2,$3,$4,$5)',
		[data.name, data.instructorid, data.discount, data.ispublic, data.detail]
	)
}

exports.getPackage = async (req, res, next) => {
	const id = req.query.packageid
	const data = await pool.query('select * from package where packageid = $1', [id])
	const packageInfo = data.rows
	res.status(200).json({ data: packageInfo })
}

exports.getCourses = async (req, res, next) => {
	const { page } = req.query
	console.log('page is', page)
	const num = 3;
	const offset = (page - 1) * num
	const results = await pool.query(
		'SELECT courseid, coursename, coursepicture, price from course offset $1 limit $2',
		[offset,num]
	)
	res.status(200).send(results.rows)
}

exports.getNumCourses = async (req, res, next) => {
	const result = await pool.query('select count(*) as count from course');
	res.status(200).send({ count:parseInt(result.rows[0].count) });
}

exports.getInstructorPackage = async (req, res, next) => {
	const instructorid = req.user.instructor
	const result = await pool.query(
		`select sum(price)-p.discount as price,p.packageid,packagename,p.discount,p.ispublic,p.detail,p.cateid, p.image, ca.cataname  from package p,package_courses pc,course c, categories ca
  where ownerid = $1 and p.packageid = pc.packageid
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
