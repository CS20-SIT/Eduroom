const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
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
  // title: eventInfo.title,
  //       type: eventInfo.type,
  //       description: eventInfo.description,
  //       startDate: eventInfo.startDate,
  //       endDate: eventInfo.endDate,
  //       startTime: eventInfo.startTime,
  //       endTime: eventInfo.endTime,
  //       place: eventInfo.place,
  const courseid = '836a91fa-aeaa-4eeb-a4b8-5761c90a7021';
  const startdate  = req.body.startDate;
  const enddate  = req.body.endDate;
  const starttime  = req.body.startTime;
  const endtime  = req.body.endTime;
  const detail  = req.body.description;
  const place = req.body.place;
  const typeid = req.body.type;
  const userid = req.user.id;
  // const instructorid = '217de492-650e-4bab-8d0d-ba2ec00d3a2b';
  const temp = await pool.query("select instructorid from instructor where userid = $1 and isverified = true",[userid]);
  const instructorid = temp.rows[0].instructorid;
  // console.log("Hello!!!!!"+instructorid);
  // const user = req.instructor;

    const data = await pool.query(
      "insert into course_event(title,courseid, startdate, enddate, starttime, endtime, detail, place, typeid, instructorid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
      [title,courseid,startdate,enddate,starttime,endtime,detail,place,typeid,instructorid]
    );
    const event = data.rows[0];
    res.status(200).json({
      success: true,data:event});
      return
    // res.send({ success: true });









  //const data = req.body;
  //console.log(data);
  //await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
  //  [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

  // res.status(200).json({ GorgunCreateSuccess: true, data: data })
  // return

}