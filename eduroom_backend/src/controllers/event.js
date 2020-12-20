const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const sendEmail = require('../utils/sendMail')
exports.getGlobalEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(DAY FROM enddate) as enddate,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
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
    console.log(user)
    // need to have more check that user has this event 
    const events = [];
    const data = await pool.query("SELECT startdate, enddate \
    FROM global_event\
    WHERE EXTRACT(MONTH FROM startdate) <= $1 AND EXTRACT(MONTH FROM enddate) >= $1\
      AND EXTRACT(YEAR FROM startdate) <= $2 AND EXTRACT(YEAR FROM enddate) >= $2", [m, y])
    events.push(...data.rows);
    if (user.role == 'instructor') {
      const instructorData = await pool.query("SELECT startdate, enddate \
       FROM course_event\
       WHERE EXTRACT(MONTH FROM startdate) <= $1 AND EXTRACT(MONTH FROM enddate) >= $1\
       AND EXTRACT(YEAR FROM startdate) <= $2 AND EXTRACT(YEAR FROM enddate) >= $2", [m, y])
      events.push(...instructorData.rows);
    }
    res.status(200).json({ success: true, data: events })
    return;
  } else {
    return next(new ErrorResponse("Unauthorize", 401))
  }

}

exports.getAdminEventInMonthYear = async (req, res, next) => {
  const user = req.user;
  const { m, y } = req.query;

  if(user){
    // need to have more check that user has this event 
    const data = await pool.query("SELECT startdate, enddate \
    FROM global_event\
    WHERE EXTRACT(MONTH FROM startdate) <= $1 AND EXTRACT(MONTH FROM enddate) >= $1\
      AND EXTRACT(YEAR FROM startdate) <= $2 AND EXTRACT(YEAR FROM enddate) >= $2",[m,y])
    res.status(200).json({success:true,data:data.rows})
    return;
  } else {
    return next(new ErrorResponse("Unauthorize",401))
  }

}

exports.getCourseEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(DAY FROM enddate) as enddate,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend, eventid,'course' as event_type,coursename from course_event join course on course.courseid = course_event.courseid`
  )
  res.send(data.rows)
  return
}
// exports.GetCourses = async (req, res, next) => {
// 	const instructorId = req.user.instructor
// 	const result = await pool.query("select courseid,coursename from course where ownerid= $1", [instructorId])
// 	res.send(result.rows)
// }
exports.getMyCourse = async (req, res, next) => {
  const user = req.user.id
  const data = await pool.query('select courseid,coursename from course join instructor on course.ownerid = instructor.instructorid where instructor.userid = $1', [user])
  res.status(200).json({ success: true, data: data.rows })
}

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
    const courseid = req.body.courseid;
    const temp = await pool.query("select instructorid from instructor where userid = $1 and isverified = true", [userid]);
    const instructorid = temp.rows[0].instructorid;
    console.log(req.body)
    console.log(req.user.id)
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
    return next(new ErrorResponse(err, 400));
  }
}

exports.dEvent = async (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  await pool.query(`DELETE FROM course_event WHERE eventid = '${id}'`);
  res.send({ success: true });

}
exports.getEvent = async (req, res, next) => {
  const id = req.query.id
  const result = await pool.query(`select * from course_event where eventid = ${id}`);
  console.log('data is ', result.rows[0])
  result.rows[0].startdate = result.rows[0].startdate.toISOString().slice(0, 10)
  result.rows[0].enddate = result.rows[0].enddate.toISOString().slice(0, 10)

  res.send(result.rows);

}
exports.eEvent = async (req, res, next) => {
  const id = req.body.id;
  const title = req.body.title;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const endtime = req.body.endtime;
  const starttime = req.body.starttime;
  const detail = req.body.detail;
  const place = req.body.place;
  console.log(id);
  await pool.query("update course_event \
                    set (title,startdate,enddate,endtime,starttime,detail,place)=($1,$2,$3,$4,$5,$6,$7) \
                    where eventid = ($8)",
    [
      title,
      startdate,
      enddate,
      endtime,
      starttime,
      detail,
      place,
      id
    ]
  );
  res.send({ success: true });

}

//-----------------for admin--------------------------------------------------------------------------------------------------------------


exports.createAdminEvent = async (req, res, next) => {
  try {
    const title = req.body.title;
    const startdate = req.body.startDate;
    const enddate = req.body.endDate;
    const starttime = req.body.startTime;
    const endtime = req.body.endTime;
    const detail = req.body.description;
    const place = req.body.place;
    const adminid = req.user.id;
    console.log(req.body)
    console.log(req.user.id)
    const data = await pool.query(
      "insert into global_event(title, startdate, enddate, starttime, endtime, detail, place, adminid)  values ($1,$2,$3,$4,$5,$6,$7,$8)",
      [title, startdate, enddate, starttime, endtime, detail, place, adminid]
    );

    //--------------------sendMail------------------------------
    //getEmail
    /* const tempMail = await pool.query("select distinct universityemail from user_student_verification as v,user_mycourse as mc where courseid = $1 and v.userid = mc.userid ;", [courseid])

    tempMail.rows.forEach((t) => {
      console.log(t)
      sendEmail({ email: t.universityemail, subject: title, message: detail, })
    }); */

    //----------------------------------------------------------

    const event = data.rows[0];
    res.status(200).json({
      success: true, data: event
    });
    return
  } catch (err) {
    return next(new ErrorResponse(console.log(err), 400));
  }
}


exports.dAdminEvent = async (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  await pool.query(`DELETE FROM global_event WHERE eventid = '${id}'`);
  res.send({ success: true });

}
exports.getAdminEvent = async (req, res, next) => {
  const id = req.query.id
  const result = await pool.query(`select * from global_event where eventid = ${id}`);
  console.log('data is ', result.rows[0])
  result.rows[0].startdate = result.rows[0].startdate.toISOString().slice(0, 10)
  result.rows[0].enddate = result.rows[0].enddate.toISOString().slice(0, 10)

  res.send(result.rows);

}
exports.eAdminEvent = async (req, res, next) => {
  const id = req.body.id;
  const title = req.body.title;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const endtime = req.body.endtime;
  const starttime = req.body.starttime;
  const detail = req.body.detail;
  const place = req.body.place;
  console.log(req.body);
  await pool.query("update global_event \
                    set (title,startdate,enddate,endtime,starttime,detail,place)=($1,$2,$3,$4,$5,$6,$7) \
                    where eventid = $8",
    [
      title,
      startdate,
      enddate,
      endtime,
      starttime,
      detail,
      place,
      id
    ]
  );
  res.send({ success: true });

}









