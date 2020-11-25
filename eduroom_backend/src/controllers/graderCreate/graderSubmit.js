const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

//Toei
const gPreviewQuestions = async (req, res, next) => {
	const data = await pool.query(
		`select id, title, description, difficulty
    	from questions`
	)
	const ann = data.rows
	res.send(ann)
}

const gAnnouncements = async (req, res, next) => {
	const data = await pool.query(
		`select a.id , a.title, a.time, al.displayname
		from announcements a, admin_login al
		where a.adminid = al.adminid
			and isvisible = true
		order by time desc;`
	)
	const ann = data.rows
	res.send(ann)
}

const gPreviewContests = async (req, res, next) => {
	const data = await pool.query(
		`select conno, title, conruletype,starttime, endtime, status
    from contest
    where status = true
    order by endtime desc`
	)
	const ann = data.rows
	res.send(ann)
}

const gContestDetails = async (req, res, next) => {
	const id = req.query.id
	const data = await pool.query(
		`select conno, title, description, conruletype,starttime, endtime, status, displayname
    from contest c, admin_login a
    where c.adminid = a.adminid
        and status = true
        and conno = '${id}';`
	)
	const ann = data.rows
	res.send(ann)
}

const gContestAnnouncements = async (req, res, next) => {
	const id = req.query.id
	const data = await pool.query(
		`select cn.title, cn.description, a.displayname, cn.time
    from contest c, admin_login a, contest_announcements cn
    where cn.adminid = c.adminid
        and c.adminid = a.adminid
        and isvisible = true
        and conno = '${id}'
    order by time;`
	)
	const ann = data.rows
	res.send(ann)
}

const gContestProblems = async (req, res, next) => {
	const id = req.query.id
	const data = await pool.query(`
	select q.title, cq.conquestionno, q.difficulty, q.description
	from contest c, contest_question cq, questions q
	where cq.questionid = q.id
		and c.conno = cq.conid
		and visibility = true
		and conno = '${id}'
	order by conquestionno;`)
	const ann = data.rows
	res.send(ann)
}

const gContestSubmissions = async (req, res, next) => {
	const id = req.query.id
	const data = await pool.query(`
	select qa.whentime ,u.displayname, qa.status , qc.conquestionno, qa.language
	from user_profile u, question_attempt qa, contest_question qc, contest c
	where qa.userid = u.userid
		and qa.questionid = qc.questionid
		and conno = '${id}'
	order by whentime desc;`)
	const ann = data.rows
	res.send(ann)
}

const gQuestionTags = async (req, res, next) => {
	const data = await pool.query(`
	select tagid, tagname
	from tags`)
	const ann = data.rows
	res.send(ann)
}

const gQuestionByTag = async (req, res, next) => {
	const tag = req.query.tag
	const data = await pool.query(`
	select  t.tagid, q.title, q.description, q.difficulty
	from tags t, questiontag qt, questions q
	where t.tagid = qt.tagid
    	and q.id = qt.questionid
    	and t.tagname = '${tag}';
	`)
	const ann = data.rows
	res.send(ann)
}

const gHomePreviewContests = async (req, res, next) => {
	const data = await pool.query(
		`select conno, title, description, conruletype,starttime, endtime
		from contest
		where status = true
			and endtime >= current_timestamp
		order by endtime desc;`
	)
	const ann = data.rows
	res.send(ann)
}

module.exports = {
	gPreviewQuestions,
	gPreviewContests,
	gContestDetails,
	gContestAnnouncements,
	gContestProblems,
	gContestSubmissions,
	gAnnouncements,
	gQuestionTags,
	gQuestionByTag,
	gHomePreviewContests,
}
