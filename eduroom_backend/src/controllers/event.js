const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const sendEmail = require('../utils/sendMail')
exports.getGlobalEvent = async (req, res, next) => {
  const type = 1;
  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend from global_event`
  )
  res.send(data.rows)
  return
}

exports.getEventInMonthYear = async (req, res, next) => {
  const user = req.user;
  const {m,y} = req.query;
  if(user){
    // need to have more check that user has this event 
    const data = await pool.query("SELECT startdate, enddate \
    FROM course_event\
    WHERE EXTRACT(MONTH FROM startdate) <= $1 AND EXTRACT(MONTH FROM enddate) >= $1\
      AND EXTRACT(YEAR FROM startdate) <= $2 AND EXTRACT(YEAR FROM enddate) >= $2",[m,y])
    res.status(200).json({success:true,data:data.rows})
    return;
  } else {
    return next(new ErrorResponse("Unauthorize",401))
  }
}

exports.getCourseEvent = async (req, res, next) => {
  const type = 2;
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
  try{

  
  const title = req.body.title;
  const courseid = '836a91fa-aeaa-4eeb-a4b8-5761c90a7021';
  const startdate = req.body.startDate;
  const enddate = req.body.endDate;
  const starttime = req.body.startTime;
  const endtime = req.body.endTime;
  const detail = req.body.description;
  const place = req.body.place;

  const userid = req.user.id;

  const temp = await pool.query("select instructorid from instructor where userid = $1 and isverified = true", [userid]);
  const instructorid = temp.rows[0].instructorid;

  const data = await pool.query(
    "insert into course_event(title,courseid, startdate, enddate, starttime, endtime, detail, place, instructorid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [title, courseid, startdate, enddate, starttime, endtime, detail, place, instructorid]
  );

  //--------------------sendMail-------------------------
  //getEmail
  const tempMail = await pool.query("select universityemail from user_student_verification where userid = 'da229e56-e47d-4748-bbab-cf706c333b85'")
  const studentMail = tempMail.rows[0].universityemail;
  sendEmail({ email: studentMail, subject: title, message: detail, })
  //----------------------------------------------------------

  const event = data.rows[0];
  res.status(200).json({
    success: true, data: event
  });
  return
}catch(err){
  return next(new ErrorResponse("Cannot create event",400));
}



}








