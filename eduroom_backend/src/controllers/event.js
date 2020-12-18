const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const sendEmail = require('../utils/sendMail')
exports.getGlobalEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend, eventid,'global' as event_type from global_event`
  )

  res.send(data.rows)
  return
}

exports.getEventInMonthYear = async (req, res, next) => {
  const user = req.user;
  const { m, y } = req.query;
  if (user) {
    1
    // need to have more check that user has this event 
    const data = await pool.query("SELECT startdate, enddate \
    FROM course_event\
    WHERE EXTRACT(MONTH FROM startdate) <= $1 AND EXTRACT(MONTH FROM enddate) >= $1\
      AND EXTRACT(YEAR FROM startdate) <= $2 AND EXTRACT(YEAR FROM enddate) >= $2", [m, y])
    res.status(200).json({ success: true, data: data.rows })
    return;
  } else {
    return next(new ErrorResponse("Unauthorize", 401))
  }
}

exports.getCourseEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend, eventid,'course' as event_type from course_event`
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
  try {


    const title = req.body.title;
    const startdate = req.body.startDate;
    const enddate = req.body.endDate;
    const starttime = req.body.startTime;
    const endtime = req.body.endTime;
    const detail = req.body.description;
    const place = req.body.place;
    const userid = req.user.id;

    const temp = await pool.query("select instructorid from instructor where userid = $1 and isverified = true", [userid]);
    const instructorid = temp.rows[0].instructorid;
    const tempCourse = await pool.query("select courseid from course where ownerid = $1", [instructorid])
    const courseid = tempCourse.rows[0].courseid;
    const data = await pool.query(
      "insert into course_event(title,courseid, startdate, enddate, starttime, endtime, detail, place, instructorid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
      [title, courseid, startdate, enddate, starttime, endtime, detail, place, instructorid]
    );

    //--------------------sendMail------------------------------
    //getEmail
    const tempMail = await pool.query("select distinct universityemail from user_student_verification as v,user_mycourse as mc where courseid = $1 and v.userid = mc.userid ;", [courseid])

    tempMail.rows.forEach((t) => {
      console.log(t)
      sendEmail({ email: t.universityemail, subject: title, message: detail, })
    });

    //----------------------------------------------------------

    const event = data.rows[0];
    res.status(200).json({
      success: true, data: event
    });
    return
  } catch (err) {
    return next(new ErrorResponse("Cannot create event", 400));
  }
}

exports.dEvent = async (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  await pool.query(`DELETE FROM course_event WHERE eventid = '${id}'`);
  res.send({ success: true });

}
exports.getEvent = async(req,res,next)=>{
  const id = req.query.id
  const result =  await pool.query(`select * from course_event where eventid = ${id}`);
  res.send(result.rows);
  
}
exports.eEvent = async (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  await pool.query(`update course_event 
  set title='toie k',startdate='2020-12-20',enddate='2020-12-20',endtime='12:19:00',starttime='12:19:00',detail='tktktktktktktktktk',place='tktktktk'
   where eventid  = ${id}`);
  res.send({ success: true });

}









