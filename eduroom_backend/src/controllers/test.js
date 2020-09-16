const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.test = async (req,res,next) => {
    const time = await pool.query('SELECT NOW()')
    res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
    return
}