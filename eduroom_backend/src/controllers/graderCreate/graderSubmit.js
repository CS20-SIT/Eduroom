const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

//Toei
const gPreviewQuestions = async (req, res, next) => {
	try {
		const offset = req.query.offset
		const data = await pool.query(
			`select id, title, description, difficulty
		from questions
		where visibility = true
		order by id
		offset ${offset} limit  10`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gCountAllQuestions = async (req, res, next) => {
	try {
		const data = await pool.query(`
	select count(*)
	from questions
	where visibility = true
	`)
		const ann = data.rows[0]
		ann.count = parseInt(ann.count)
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gAnnouncements = async (req, res, next) => {
	try {
		const data = await pool.query(
			`select a.id , a.title, a.time, al.displayname
			from announcements a, admin_login al
			where a.adminid = al.adminid
				and isvisible = true
			order by time desc;`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gPreviewContests = async (req, res, next) => {
	try {
		const data = await pool.query(
			`select conno, title, conruletype,starttime, endtime, status
		from contest
		where status = true
		order by endtime desc`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gContestDetails = async (req, res, next) => {
	try {
		const contestId = req.query.contestId
		const data = await pool.query(
			`select conno, title, description, conruletype,starttime, endtime, status, displayname
    from contest c, admin_login a
    where c.adminid = a.adminid
        and status = true
        and conno = '${contestId}';`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gContestAnnouncements = async (req, res, next) => {
	try {
		const contestId = req.query.contestId
		const data = await pool.query(
			`select cn.coannno, cn.title, cn.description, a.displayname, cn.time
    from contest c, admin_login a, contest_announcements cn
    where cn.adminid = c.adminid
        and c.adminid = a.adminid
        and isvisible = true
        and conno = '${contestId}'
    order by time;`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gContestProblems = async (req, res, next) => {
	try {
		const contestId = req.query.contestId
		const data = await pool.query(`
	select q.id, q.title, cq.conquestionno, q.difficulty, q.description
	from contest c, contest_question cq, questions q
	where cq.questionid = q.id
		and c.conno = cq.conid
		and visibility = true
		and conno = '${contestId}'
	order by conquestionno;`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gContestSubmissions = async (req, res, next) => {
	try {
		const contestId = req.query.contestId
		const data = await pool.query(`
		select qa.whentime ,u.displayname, qa.status , qc.conquestionno, qa.language, time, memory, score
		from user_profile u, question_attempt qa, contest_question qc, contest c
		where qa.userid = u.userid
		and qa.questionid = qc.questionid
		and conno = '${contestId}'
		order by whentime desc;`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gQuestionTags = async (req, res, next) => {
	try {
		const data = await pool.query(`
		select tagid, tagname
		from tags`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('Error', 400)
	}
}

const gQuestionByTag = async (req, res, next) => {
	try {
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
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gHomePreviewContests = async (req, res, next) => {
	try {
		const data = await pool.query(
			`select conno, title, description, conruletype,starttime, endtime
		from contest
		where status = true
			and endtime >= current_timestamp
		order by endtime desc;`
		)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gAnnouncementById = async (req, res, next) => {
	try {
		const id = req.query.id
		const data = await pool.query(`
	select a.id, a.title, a.description, a.time, al.displayname
	from announcements a, admin_login al
	where a.adminid = al.adminid
  		and id = ${id};
	`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gOIRankingTopSix = async (req, res, next) => {
	try {
		const data = await pool.query(`
		select r.name, r.totalcorrect, u.avatar
		from oi_rank r, user_profile u
		where r.userid = u.userid
		order by totalcorrect desc
		limit 6;
	`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gACMRankingTopSix = async (req, res, next) => {
	try {
		const data = await pool.query(`
		select r.name, r.totalcorrect, u.avatar
		from acm_rank r, user_profile u
		where r.userid = u.userid
		order by totalcorrect desc
		limit 6;
	`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}
const gContestAnnouncementDetail = async (req, res, next) => {
	try {
		const id = req.query.id
		const contestId = req.query.contestId
		const data = await pool.query(`
		select ca.coannno,title, description, a.displayname, ca.time
		from contest_announcements ca, admin_login a
		where ca.adminid = a.adminid
			and isvisible = true
			and conid = ${contestId}
			and coannno = ${id};
	`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gContestQuestionDetail = async (req, res, next) => {
	try {
		const contestId = req.query.contestId
		const id = req.query.id
		const data = await pool.query(`
		select cq.conquestionno, q.id, title, description, hint, intputdes, outputdes, timelimit, memorylimit, difficulty, ruletype, displayname
		from contest_question cq,questions q, admin_login a
		where cq.questionid = q.id
			and q.adminid = a.adminid
			and q.id = ${id}
			and cq.conid = ${contestId}	`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gQuestionTestCase = async (req, res, next) => {
	try {
		const id = req.query.id
		const data = await pool.query(`
		SELECT * 
		FROM questionsample 
		WHERE questionid = ${id}
		order by sampleno;`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gQuestionDetail = async (req, res, next) => {
	try {
		const id = req.query.id
		const data = await pool.query(`
		select id, title, description, hint, intputdes, outputdes, timelimit, memorylimit, difficulty, ruletype, displayname
		from questions q, admin_login a
		where q.adminid = a.adminid
			and q.id = ${id}`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gQuestionSubmission = async (req, res, next) => {
	try {
		const questionId = req.query.questionId
		const userId = req.query.userId
		const data = await pool.query(`
		select score, status, time, memory, whentime, displayname
   		from question_attempt qa, user_profile up
		where qa.userid = up.userid
      		and questionid = ${questionId}
			  and qa.userid='${userId}'
		limit 100`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
}

const gCountQuestionByTag = async (req, res, next) => {
	try {
		const tag = req.query.tag
		const data = await pool.query(`
		select  count(*)
		from tags t, questiontag qt, questions q
		where t.tagid = qt.tagid
    		and q.id = qt.questionid
    		and t.tagname = '${tag}';`)
		const ann = data.rows
		res.send(ann)
	} catch (err) {
		return new ErrorResponse('ERROR', 400)
	}
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
	gAnnouncementById,
	gCountAllQuestions,
	gOIRankingTopSix,
	gACMRankingTopSix,
	gContestAnnouncementDetail,
	gContestQuestionDetail,
	gQuestionTestCase,
	gQuestionDetail,
	gQuestionSubmission,
	gCountQuestionByTag,
}
