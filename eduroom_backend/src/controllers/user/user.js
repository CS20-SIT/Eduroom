const bcrypt = require('bcryptjs')
const errorHandler = require('../../middleware/error')
const pool = require('../../database/db')

const test = async (req, res, next) => {
	const time = await pool.query('SELECT NOW()')

	res.send({ success: true })
	return
}

// const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
const getWishlist = async (req, res, next) => {
	try {
		const user = '08e9d239-b3f2-4db8-b29a-da99a314df92'
		// const user = req.user.id
		const condition = req.query.condition
		// const condition='';
		const orderby = req.query.orderby
		// const orderby='addtime desc';
		const data = await pool.query(
			'select w.userid,w.courseid,addtime,coursename,coursepicture,price,p.firstname,p.lastname ' +
			'from user_wishlist w ' +
			'inner join course c on c.courseid=w.courseid ' +
			'inner join instructor i on i.instructorid=c.ownerid ' +
			'inner join user_profile p on i.userid=p.userid ' +
			'where w.userid=$1 ' +
			condition +
			'order by ' +
			orderby +
			'; ',
			[user]
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const getMycourse = async (req, res, next) => {
	try {
		// const user = req.body.userid
		const finish = req.query.finish
		const condition = req.query.condition
		const orderby = req.query.orderby

		const user = '08e9d239-b3f2-4db8-b29a-da99a314df92';
		// const condition='';
		// const orderby='addtime desc';

		const data = await pool.query(
			'select m.userid,m.courseid,addtime,lastvisit,isfinished,coursename,coursepicture,p.firstname,p.lastname ' +
			'from user_mycourse m ' +
			'inner join course c on c.courseid=m.courseid ' +
			'inner join instructor i on i.instructorid=c.ownerid ' +
			'inner join user_profile p on i.userid=p.userid ' +
			'where m.userid=$1 and isfinished=$2 ' +
			condition +
			'order by ' +
			orderby +
			'; ',
			[user, finish]
		)
		const ann = data.rows
		res.send(ann)
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const deleteWishlist = async (req, res, next) => {
	try {
		const course = req.body.courseid
		const user = req.body.userid
		await pool.query('delete from user_wishlist where (userid,courseid)=($1,$2);', [user, course])
		res.send({ success: true })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}
///////////
const getProfile = async (req, res, next) => {
	try {
		const user = req.user.id
		const userProfile = await pool.query(
			'select avatar,firstname,lastname,isstudent,email,birthdate,createat,bio,phoneno ' +
			'from user_profile u ' +
			'inner join local_auth l on u.userid = l.userid ' +
			'where u.userid=$1; ',
			[user]
		)
		res.send(userProfile.rows[0])
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const editProfile = async (req, res, next) => {
	try {
		const user = req.body.userid
		const avatar = req.body.avatar
		const firstname = req.body.firstname
		const lastname = req.body.lastname
		const birthdate = req.body.birthdate
		const bio = req.body.bio
		const phoneno = req.body.phoneno
		await pool.query(
			'update user_profile set ' +
			'avatar=$2, ' +
			'firstname=$3, ' +
			'lastname=$4, ' +
			'birthdate=$5, ' +
			'bio=$6, ' +
			'phoneno=$7, ' +
			'where userid=$1; ',
			[user, avatar, firstname, lastname, birthdate, bio, phoneno]
		)
		res.send({ success: true })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const checkPassword = async (req, res, next) => {
	const password = req.body.password
	const user = req.body.userid
	await pool.query('select password from local_auth where userid = $1', [user])
	res.send({ success: true })
}

const postNewPassword = async (req, res, next) => {
	const password = req.body.password
	const user = req.body.userid
	await pool.query('update local_auth set ' + 'password=$2 ' + 'where userid=$1; ', [user, password])
	res.send({ success: true })
}
module.exports = {
	test,
	getWishlist,
	getMycourse,
	deleteWishlist,
	getProfile,
	editProfile,
	getCheckPassword,
	postNewPassword,
}
