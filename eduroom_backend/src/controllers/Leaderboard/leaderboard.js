const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')


exports.sortRank = async (req, res, next) => {
  const rank = await pool.query(
      'select up.displayname, lt.titlename, leaderboard.xp'+
      ' from leaderboard '+
      'join user_profile up on leaderboard.userid = up.userid '+ 
      'join leaderboard_title lt on leaderboard.titleid = lt.titleid'
      +' order by leaderboard.xp; ')
      
      
  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  res.json(rank)
  return
}