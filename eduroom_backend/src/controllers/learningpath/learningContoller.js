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
		const question = await pool.query(
			`select p.nodeid, e.answer,p.node_name,e.question,p.pathid,pp.path_name from node_exercise e, path_node p, path pp
	where p.nodeid = e.nodeid and e.nodeid = $1 and p.pathid = pp.pathid`,
			[nodeID]
		)
		let complete = false
		const temp = await pool.query(`SELECT count(*) as count from user_progress where nodeid = $1 and userid = $2`, [
			nodeID,
			userID,
		])
		if (temp.rows[0].count > 0) {
			complete = true
		}
		let answer = question.rows[0]
		answer.complete = complete
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
