const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

exports.getPathList = async (req, res, next) => {
	try {
		const pathList = await pool.query('SELECT * FROM path')
		res.send({ success: true, data: pathList.rows })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getNodeByPath = async (req, res, next) => {
	try {
		const pathid = req.query.pathid
		const userid = req.user.id
		let nodeList = await pool.query('SELECT * FROM path_node WHERE pathid = $1', [pathid])
		for (let i = 0; i < nodeList.rows.length; i++) {
			let complete = false
			const node = nodeList.rows[i]
			const nodeid = node.nodeid
			const temp = await pool.query(
				`SELECT count(*) AS count FROM user_progress where nodeid = $1 and userid = $2`,
				[nodeid, userid]
			)
			if (temp.rows[0].count > 0) {
				complete = true
			}
			let parent_complete = true
			if (node.parent_node_id) {
				const temp = await pool.query(
					`SELECT count(*) AS count FROM user_progress where nodeid = $1 and userid = $2`,
					[node.parent_node_id, userid]
				)
				if (temp.rows[0].count == 0) {
					parent_complete = false
				}
			}
			nodeList.rows[i].complete = complete
			nodeList.rows[i].parent_complete = parent_complete
		}
		res.send({ success: true, data: nodeList.rows })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getExerciseByNodeId = async (req, res, next) => {
	try {
		const userID = req.user.id
		const nodeID = req.query.nodeID
		//check whether this nodeid is a quiz
		const result = await pool.query(`SELECT nodeid from node_question where nodeid = $1`, [nodeID])
		if (result.rowCount > 0) {
			return res.send()
		}

		const question = await pool.query(
			`select p.nodeid, e.answer,p.node_name,e.question,p.pathid,pp.path_name from node_exercise e, path_node p, path pp
	where p.nodeid = e.nodeid and e.nodeid = $1 and p.pathid = pp.pathid`,
			[nodeID]
		)
		//get isComplete
		let complete = false
		const isComplete = await pool.query(
			`SELECT count(*) as count from user_progress where nodeid = $1 and userid = $2`,
			[nodeID, userID]
		)
		if (isComplete.rows[0].count > 0) {
			complete = true
		}
		let answer = question.rows[0]
		answer.complete = complete

		//get next node
		const nextNode = await pool.query(`select nodeid from path_node where parent_node_id = $1`, [nodeID])
		answer.nextNode = nextNode.rows[0].nodeid
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getNodeType = async (req, res, next) => {
	try {
		const nodeID = req.query.nodeID
		let type = 'exercise'
		const result = await pool.query(`SELECT nodeid from node_question where nodeid = $1`, [nodeID])
		if (result.rowCount > 0) {
			type = 'quiz'
		}
		res.send({ type })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getQuizByNodeId = async (req, res, next) => {
	const nodeID = req.query.nodeID
	try {
		let questions = await pool.query(`SELECT * FROM node_question WHERE nodeid = $1 order by questionno`, [nodeID])
		questions = questions.rows
		let answer = questions
		for (let i = 0; i < questions.length; i++) {
			const question = questions[i]
			let choices = await pool.query(
				`select choiceno,answer,iscorrect
			from node_question_choice
			where nodeid = $1 and questionno = $2
			order by choiceno`,
				[nodeID, question.questionno]
			)
			choices = choices.rows
			answer[i] = { ...answer[i], choices: choices }
		}

		let nodeDetail = await pool.query(`select * from path_node where nodeid = $1`, [nodeID])
		let pathDetail = await pool.query(
			`select p.pathid,p.path_name from path p, path_node pn where pn.pathid = p.pathid and pn.nodeid = $1`,
			[nodeID]
		)
		pathDetail = pathDetail.rows[0]
		nodeDetail = nodeDetail.rows[0]
		nodeDetail = { ...nodeDetail, path_name: pathDetail.path_name }
		let result = { nodeDetail, questions: answer }
		res.send(result)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.completeNode = async (req, res, next) => {
	try {
		const userid = req.user.id
		const { nodeid, score, type } = req.body
		console.log(nodeid, score)
		//check wheter this user already play this node
		const old = await pool.query(`SELECT nodeid from user_progress where nodeid = $1 and userid = $2`, [
			nodeid,
			userid,
		])
		if (old.rowCount > 0) {
			//update score of that node
			await pool.query(`UPDATE user_progress SET score = $1 where nodeid = $2 and userid = $3`, [
				score,
				nodeid,
				userid,
			])
		} else {
			//insert progress
			await pool.query(`INSERT INTO user_progress (userid,nodeid,progression,score) VALUES($1,$2,$3,$4)`, [
				userid,
				nodeid,
				true,
				score,
			])
			let increaseScore = 50
			if (type === 'quiz') increaseScore = 100
			//check that there is an xp of this user
			if (type === 'exercise' || score >= 3) {
				console.log('will get', increaseScore)
				const oldXpResult = await pool.query(`SELECT totalxp,currentxp from user_xp where userid = $1`, [
					userid,
				])
				if (oldXpResult.rowCount === 0) {
					await pool.query(`INSERT INTO user_xp (userid,totalxp,currentxp) VALUES($1,$2,$3)`, [userid, 0, 0])
				}
				let newTotalXp = oldXpResult.rows[0].totalxp + increaseScore
				let newCurrentXp = oldXpResult.rows[0].currentxp + increaseScore
				await pool.query(`UPDATE user_xp SET totalxp = $1, currentxp = $2 where userid = $3`, [
					newTotalXp,
					newCurrentXp,
					userid,
				])
			}
		}
		res.send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
