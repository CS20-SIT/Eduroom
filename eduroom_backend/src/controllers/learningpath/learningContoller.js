const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

exports.getPathList = async (req, res, next) => {
	try {
		const pathList = await pool.query('SELECT * FROM path')
		res.status(200).json({ success: true, data: pathList.rows })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getNodeByPath = async (req, res, next) => {
	try {
		const pathid = req.query.pathid
		let nodeList = await pool.query('SELECT * FROM path_node WHERE pathid = $1', [pathid])
		for (let i = 0; i < nodeList.rows.length; i++) {
			let complete = false
			const nodeid = nodeList.rows[i].nodeid
			const temp = await pool.query(`SELECT count(*) AS count FROM user_progress where nodeid = $1`, [nodeid])
			if (temp.rows[0].count > 0) {
				complete = true
			}
			nodeList.rows[i].complte = complete
		}
		res.status(200).json({ success: true, data: nodeList.rows })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.getExerciseByNodeId = async (req, res, next) => {
	try {
		const nodeId = req.query.nodeId
		const question = await pool.query(
			`select p.nodeid, e.answer,p.node_name,e.question,p.pathid from node_exercise e, path_node p
	where p.nodeid = e.nodeid and e.nodeid = $1`,
			[nodeId]
		)
		res.send(question.rows[0])
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
