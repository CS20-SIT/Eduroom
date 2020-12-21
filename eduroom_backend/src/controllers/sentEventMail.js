
const sendEmail = require('../utils/sendMail')
const pool = require('../database/db')


exports.mailCourseSend = async (req, res, next) => {

  sendEmail({ email: user, subject: 'TEST', message: 'TEST GORGUN', })


  const time = await pool.query('SELECT NOW()')
  res.status(200).json({ success: true })
  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  return
}
