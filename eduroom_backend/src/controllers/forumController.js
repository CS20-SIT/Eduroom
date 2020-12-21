const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.forumTest = async (req, res, next) => {
	const data = [
		{ username: '00001', topic: 'topic01', date: '2020-01-01' },
		{ username: '00002', topic: 'topic02', date: '2020-01-02' },
	]
	res.status(200).json({ success: true, data: data })
	return
}
exports.searchForum = async (req, res, next) => {
	const search = req.body.search
	const user = req.user
	if (search) {
		const data = await pool.query(
			'select f.forumid as forumid, titlethread, f.userid as userid, displayname as author, posttime, subtypename, typename, c.categorytypeid as categorytypeid ,likes,comments, forum_from_like.userid AS is_like from forum_form f JOIN forum_form_info ffi ON ffi.forumid = f.forumid JOIN user_profile u ON f.userid = u.userid JOIN sub_category s ON f.subcategoryiid = s.subcategoryiid JOIN category_type c ON s.categorytypeid = c.categorytypeid LEFT JOIN forum_from_like ON f.forumid = forum_from_like.forumid AND forum_from_like.userid = $1 WHERE UPPER(titlethread) LIKE $2 order by posttime desc;',
			[user?.id ?? null, '%' + search.toUpperCase() + '%']
		)
		const forum = data.rows
		res.status(200).json({ success: true, data: forum })
	} else {
		return next(new ErrorResponse('Not Found', 404))
	}
}
exports.category = async (req, res, next) => {
	const catQuery = await pool.query(
		'SELECT typename, subtypename from category_type c, sub_category s where c.categorytypeid = s.categorytypeid ORDER BY c.categorytypeid,s.subcategoryiid'
	)
	const cat = catQuery.rows
	const subcategory = {}
	const category = []
	cat.map((el) => {
		if (subcategory[el.typename]) {
			subcategory[el.typename].push(el.subtypename)
		} else {
			subcategory[el.typename] = [el.subtypename]
			category.push(el.typename)
		}
	})
	res.status(200).json({ success: true, category, subcategory })
}

exports.showForum = async (req, res, next) => {
	const user = req.user
	const data = await pool.query(
		'select f.forumid as forumid, titlethread, f.userid as userid, displayname as author, posttime, subtypename, typename, c.categorytypeid as categorytypeid ,likes,comments, forum_from_like.userid AS is_like from forum_form f JOIN forum_form_info ffi ON ffi.forumid = f.forumid JOIN user_profile u ON f.userid = u.userid JOIN sub_category s ON f.subcategoryiid = s.subcategoryiid JOIN category_type c ON s.categorytypeid = c.categorytypeid LEFT JOIN forum_from_like ON f.forumid = forum_from_like.forumid AND forum_from_like.userid = $1 order by posttime desc;',
		[user?.id ?? null]
	)
	const forum = data.rows
	res.status(200).json({ success: true, data: forum })
}
exports.selectForum = async (req, res, next) => {
	const id = req.params.id
	const user = req.user
	const data = await pool.query(
		'SELECT f.forumid, f.userid, posttime, titlethread, subcategoryiid, content, isdelete, up.displayname AS author,likes, comments, forum_from_like.userid AS is_like FROM forum_form f JOIN user_profile up on f.userid = up.userid JOIN forum_form_info ffi on ffi.forumid = f.forumid LEFT JOIN forum_from_like ON f.forumid = forum_from_like.forumid AND forum_from_like.userid = $2 WHERE isdelete = false AND f.userid = up.userid AND f.forumid = $1',
		[id, user?.id ?? null]
	)
	const data2 = await pool.query(
		'select f.forumid, answerno, f.userid, displayname as author, anstime, isdelete, answer from forum_answer_form f join user_profile u on f.userid = u.userid where isdelete = false and f.forumid= $1 order by anstime asc  ',
		[id]
	)
	const forum = data.rows[0]
	const comment = data2.rows
	res.status(200).json({ success: true, data: { forum, comment } })
}
exports.room = async (req, res, next) => {
	const data = await pool.query('select * from category_type')
	const room = data.rows
	res.status(200).json({ success: true, data: room })
}
exports.selectRoom = async (req, res, next) => {
	const roomname = req.params.roomname
	const user = req.user
	const data = await pool.query(
		'select f.forumid as forumid, titlethread, f.userid as userid, displayname as author, posttime, subtypename, typename, c.categorytypeid as categorytypeid ,likes,comments, forum_from_like.userid AS is_like from forum_form f JOIN forum_form_info ffi ON ffi.forumid = f.forumid JOIN user_profile u ON f.userid = u.userid JOIN sub_category s ON f.subcategoryiid = s.subcategoryiid JOIN category_type c ON s.categorytypeid = c.categorytypeid LEFT JOIN forum_from_like ON f.forumid = forum_from_like.forumid AND forum_from_like.userid = $1 WHERE c.typename = $2 order by posttime desc;',
		[user?.id ?? null, roomname]
	)
	const forum = data.rows
	res.status(200).json({ success: true, data: forum })
}

exports.createForum = async (req, res, next) => {
	res.status(200).json({ success: true })
	return
}
exports.createComment = async (req, res, next) => {
	const temp = req.body
	// const ansno = { no: "3" };
	const result = await pool.query('SELECT MAX(answerno) as answerno from forum_answer_form')
	const ansno = result.rows[0].answerno + 1
	const userId = req.user.id
	const data = await pool.query(
		'insert into forum_answer_form (forumid, answerno, userid, anstime, answer ) values($1,$2,$3,current_timestamp,$4)',
		[temp.id, ansno, userId, temp.comment]
	)
	const forum = data.rows
	res.status(200).json({ success: true, data: forum })
	return
}
exports.deleteComment = async (req, res, next) => {
	const forumid = req.params.id
	const answerno = req.body.answerno
	const user = req.user
	if (user) {
		await pool.query('UPDATE forum_answer_form SET isdelete = $1 where forumid=$2 and userid=$3 and answerno=$4', [
			true,
			forumid,
			user.id,
			answerno,
		])
		res.status(200).json({ success: true })
		return
	} else {
		return next(new ErrorResponse('Unauthorize', 401))
	}
}
exports.getCategory = async (req, res, next) => {
	const cat = await pool.query('SELECT typename from category_type')
	res.status(200).json({ success: true, category: cat.rows })
}
exports.deleteForum = async (req, res, next) => {
	const forumid = req.params.id
	const user = req.user
	if (user) {
		await pool.query('UPDATE forum_form SET  isdelete = $1 where forumid=$2 and userid=$3', [
			true,
			forumid,
			user.id,
		])
		res.status(200).json({ success: true })
		return
	} else {
		return next(new ErrorResponse('Unauthorize', 401))
	}
}
exports.editForum = async (req, res, next) => {
	const temp = req.body
	const forumid = req.params.id
	const user = req.user
	if (user) {
		await pool.query('insert into edit_history (forumid,edittime,oldcontent) values ($1,current_timestamp,$2)', [
			forumid,
			temp.old.content,
		])
		await pool.query('UPDATE forum_form SET titlethread = $1, content = $2 WHERE forumid = $3 AND userid = $4', [
			temp.new.titlethread,
			temp.new.content,
			forumid,
			user.id,
		])
		res.status(200).json({ success: true })
		return
	} else {
		return next(new ErrorResponse('Unauthorize', 401))
	}
}
exports.setForum = async (req, res, next) => {
	const temp = req.body
	const userId = req.user.id
	const subcat = await pool.query('SELECT subcategoryiid FROM sub_category WHERE subtypename = $1', [temp.subcat])
	if (subcat.rowCount > 0) {
		const subcatID = subcat.rows[0].subcategoryiid
		const data = await pool.query(
			'insert into forum_form ( userid, posttime, titlethread, subcategoryiid, content) values($1,current_timestamp,$2,$3,$4)',
			[userId, temp.title, subcatID, temp.content]
		)
		const forum = data.rows
		res.status(200).json({ success: true, data: forum })
		return
	} else {
		return next(new ErrorResponse('Sub Catagory is not valid', 404))
	}
}
exports.setLike = async (req, res, next) => {
	const forumid = req.params.id
	const user = req.user
	try {
		const isLike = await pool.query('SELECT * FROM forum_from_like WHERE userid = $1 AND forumid = $2', [
			user.id,
			forumid,
		])
		if (isLike.rowCount == 1) {
			await pool.query('DELETE FROM forum_from_like WHERE forumid = $1 AND userid = $2', [forumid, user.id])
		} else {
			await pool.query('insert into forum_from_like(forumid, userid) VALUES($1,$2)', [forumid, user.id])
		}
		res.status(201).json({ success: true })
		return
	} catch (err) {
		return next(new ErrorResponse('Unauthorize', 401))
	}
}

//
