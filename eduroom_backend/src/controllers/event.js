const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
exports.getEvent = async (req, res, next) => {

  const data = await pool.query(
    `select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(MONTH FROM startdate) as nowMonth,EXTRACT(HOUR FROM starttime) 
      as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) 
      as Hend, EXTRACT(MINUTE FROM endtime) as Mend from global_event`
  )
  res.send(data.rows)
  return
}

exports.createEvent = async (req, res, next) => {
  const title = 'SA';
  const type = 1;
  const detail = 'sa';
  const startDate = '2020-12-14';
  const endDate = '2020-12-14';
  const startTime = '13:00';
  const endTime = '16:00';
  const place = 'CB2312';
  const intructor =req.instructor
  const course = '836a91fa-aeaa-4eeb-a4b8-5761c90a7021'
  const user = req.instructor;

  if (user) {
    await pool.query(
      `insert into course_event(title, startdate,courseid, enddate, starttime, endtime, detail, place, typeid, instructorid) 
          VALUES ($1 , $2, $3 , $4, $5, $6, $7, $8, $9, $10)`
      [title, startDate,course, endDate, startTime, endTime, detail, place, type, intructor]
    );
    res.send({ success: true });
  }









  //const data = req.body;
  //console.log(data);
  //await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
  //  [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

  // res.status(200).json({ GorgunCreateSuccess: true, data: data })
  // return

}