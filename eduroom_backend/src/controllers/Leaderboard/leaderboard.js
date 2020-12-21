const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

exports.sortRank = async (req, res, next) => {
	await pool.query(
		'UPDATE leaderboard ' +
			'SET titleid = CASE ' +
			'WHEN xp >= 1800 then 1 ' +
			'WHEN xp between 1499 and 1800 then 2 ' +
			'WHEN xp between 1199 and 1500 then 3 ' +
			'WHEN xp between 899 and 1200 then 4 ' +
			'WHEN xp between 599 and 900 then 5 ' +
			'WHEN xp between 299 and 600 then 6 ' +
			'WHEN xp between 0 and 300 then 7 ' +
			'ELSE 0 ' +
			'END;'
	)
	const rank = await pool.query(
		'select up.displayname, lt.titlename, leaderboard.xp' +
			' from leaderboard ' +
			'join user_profile up on leaderboard.userid = up.userid ' +
			'join leaderboard_title lt on leaderboard.titleid = lt.titleid' +
			' order by leaderboard.xp DESC; '
	)

	// res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
	res.status(200).json(rank.rows)
	return
}

exports.getUserDetail = async (req, res, next) => {
	try {
		const userid = req.user.id
		const result = await pool.query(`SELECT totalxp as xp from user_xp where userid = $1`, [userid])
		const all_rank = await pool.query(`SELECT userid from user_xp order by totalxp desc`)
		let rank = 1
		for (let i = 0; i < all_rank.rows.length; i++) {
			if (all_rank.rows[i].userid === userid) {
				rank = i + 1
				break
			}
		}
		if (result.rowCount > 0) {
			const all_xp = result.rows[0].xp
			const level = Math.floor(all_xp / 100)
			const xp = all_xp - level * 100
			res.send({ xp, level, rank, numUser: all_rank.rowCount })
		} else {
			res.send({ xp: 0 })
		}
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
