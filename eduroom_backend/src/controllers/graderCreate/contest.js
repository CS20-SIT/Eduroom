const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

const pContest = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const title = req.body.title
		const conRuleType = req.body.conRuleType
		const description = req.body.description
		const startTime = req.body.startTime
		const endTime = req.body.endTime
		const status = req.body.status

		pool.query(
			'INSERT INTO contest(title,conRuleType,description,startTime,endTime,status,adminid) VALUES ($1 , $2, $3, $4, $5, $6, $7) returning conno',
			[title, conRuleType, description, startTime, endTime, status, adminid],
			function (err, result, fields) {
				if (err) throw err
				const id = result.rows[0].conno
				const lgTitle = 'ADD Contest'
				const lgDetail = `${id}.${title} `
				pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
					lgTitle,
					lgDetail,
					adminid,
				])
			}
		)

		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const pContestQuestion = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const conid = req.body.conid
		const questionId = req.body.questionid

		const title = req.body.title
		await pool.query('INSERT INTO contest_question(conid,questionId) VALUES ($1 , $2 )', [conid, questionId])
		const lgTitle = 'ADD Contest Question'
		const lgDetail = `Contest No.${conid}, ${questionId}.${title} `
		await pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
			lgTitle,
			lgDetail,
			adminid,
		])
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const pContestAnn = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const title = req.body.title
		const description = req.body.description
		const conId = req.body.conid

		const isVisible = req.body.isvisible

		await pool.query(
			'INSERT INTO contest_announcements(title,description,conId,adminId,isVisible) VALUES ($1 , $2, $3, $4, $5)',
			[title, description, conId, adminid, isVisible]
		)
		const lgTitle = 'ADD Contest Announcement'
		const lgDetail = `Contest No.${conId}, ${title} `
		await pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
			lgTitle,
			lgDetail,
			adminid,
		])
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

//edit by id
const eContest = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const conno = req.body.conno
		const title = req.body.title
		const conRuleType = req.body.conRuleType
		const description = req.body.description
		const startTime = req.body.startTime
		const endTime = req.body.endTime
		const status = req.body.status

		await pool.query(
			'UPDATE contest SET (title,conruletype,description,starttime,endtime,status,"adminid") = ($1 , $2, $3, $4, $5, $6, $7) WHERE conno = ($8)',
			[title, conRuleType, description, startTime, endTime, status, adminid, conno]
		)
		const lgTitle = 'EDIT Contest'
		const lgDetail = `${conno}.${title} `
		await pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
			lgTitle,
			lgDetail,
			adminid,
		])
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const eContestAnn = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const coannno = req.body.coannno
		const conid = req.body.conid
		const title = req.body.title
		const description = req.body.description
		const isVisible = req.body.isvisible

		await pool.query(
			'UPDATE contest_announcements SET (title,description,adminId,isVisible,conid) = ($1 , $2, $3, $4,$5) WHERE coannno = ($6)',
			[title, description, adminid, isVisible, conid, coannno]
		)
		res.send({ success: true })
		const lgTitle = 'EDIT Contest Announcement'
		const lgDetail = `Contest No.${conid}, ${title} `
		await pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
			lgTitle,
			lgDetail,
			adminid,
		])
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

//get all
const gAllContest = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const data = await pool.query('select * from contest order by 1 DESC ')
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

//get by id
const gContest = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const id = req.query.id
		const data = await pool.query(`select * from contest  where conno =  '${id}'`)
		const conann = data.rows
		res.send(conann)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const setTime = (text) => {
	text = '' + text
	return text.substr(4, 11) + ' At ' + text.substr(16, 5)
}
const gContestAnn = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const id = req.query.conid
		const data = await pool.query(
			`select row_number() over(order by a.coannno) as id ,a.coannno,a.conid, a.title , a.adminid,a.description , b.displayName ,a.time ,a.isvisible  from contest_announcements a , admin_login b where a.adminid = b.adminid and conid = '${id}' order by 1 DESc `
		)
		const conann = data.rows
		if (conann != null) {
			conann.map((i) => {
				i.time = setTime(i.time)
			})
		}

		res.send(conann)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const gContestQuestion = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const conno = req.query.conno
		const data = await pool.query(
			`select conquestionno,  a.id, a.title , a.difficulty , a.visibility, b.displayName,b.adminid from contest_question c , Questions a, admin_login b  where a.adminid = b.adminid and conid = '${conno}' and questionid = a.id order by 1 `
		)
		const conann = data.rows
		res.send(conann)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
const pContestExistingQuestion = async (req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
	try {
		const adminid = req.user.id
		const conno = req.body.conno
		const question = req.body.questions

		const totalquestion = question.length
		let values = question.map((q) => {
			return '(' + conno + ' , ' + q.id + ')'
		})
		const insertvalue = values.join(',')

		try {
			await pool.query('INSERT INTO contest_question(conid,questionid) VALUES ' + insertvalue)
		} catch (error) {
			console.error(error)
		}
		const lgTitle = 'ADD Contest Questions'
		const lgDetail = `Contest No.${conno}, Added ${totalquestion} existing questions `
		await pool.query('INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)', [
			lgTitle,
			lgDetail,
			adminid,
		])
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

module.exports = {
	pContest,
	pContestAnn,
	pContestQuestion,
	eContest,
	eContestAnn,
	gAllContest,
	gContest,
	gContestAnn,
	gContestQuestion,
	pContestExistingQuestion,
}

///// dont forget to go to routes => graderRoute  and add your api
