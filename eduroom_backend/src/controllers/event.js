const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const sendEmail = require('../utils/sendMail')
exports.getGlobalEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend from global_event`
  )
  res.send(data.rows)
  return
}


exports.getCourseEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend from course_event`
  )
  res.send(data.rows)
  return
}
// exports.GetCourses = async (req, res, next) => {
// 	const instructorId = req.user.instructor
// 	const result = await pool.query("select courseid,coursename from course where ownerid= $1", [instructorId])
// 	res.send(result.rows)
// }


exports.createEvent = async (req, res, next) => {
  const title = req.body.title;
  const courseid = '836a91fa-aeaa-4eeb-a4b8-5761c90a7021';
  const startdate = req.body.startDate;
  const enddate = req.body.endDate;
  const starttime = req.body.startTime;
  const endtime = req.body.endTime;
  const detail = req.body.description;
  const place = req.body.place;

  const userid = req.user.id;
  //--------------------sendMail-------------------------
  //getEmail
 /*  const tempMail = await pool.query("select universityemail from user_student_verification where userid = 'da229e56-e47d-4748-bbab-cf706c333b85'")
  const studentMail = tempMail.rows[0].universityemail;

  //getsubject
  const tempTitle = await pool.query("select title from course_event where title = $1", [title])
  const subject = tempTitle.rows[0].title;

  //getmessage
  const tempDetail = await pool.query("select detail from course_event where detail = $1", [detail])
  const message = tempDetail.rows[0].detail;
  sendEmail({ email: studentMail, subject: subject, message: message, }) */

  //----------------------------------------------------------

  const temp = await pool.query("select instructorid from instructor where userid = $1 and isverified = true", [userid]);
  const instructorid = temp.rows[0].instructorid;

  const data = await pool.query(
    "insert into course_event(title,courseid, startdate, enddate, starttime, endtime, detail, place, instructorid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [title, courseid, startdate, enddate, starttime, endtime, detail, place, instructorid]
  );
  const event = data.rows[0];
  res.status(200).json({
    success: true, data: event
  });
  return



}








