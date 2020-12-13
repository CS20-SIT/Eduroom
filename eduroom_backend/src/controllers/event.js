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
  const adminid = '12345678-1234-1234-1234-123456789123';
  const place = 'CB2312';
  await pool.query(
    `insert into global_event(title, startdate, enddate, starttime, endtime, detail, place, typeid, adminid) 
        VALUES ($1 , $2, $3 , $4, $5, $6, $7, $8, $9)`
    [title,startDate,endDate,startTime,endTime,detail,place,type,adminid]
  );
  res.send({ success: true });








    //const data = req.body;
    //console.log(data);
     //await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
       //  [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

   // res.status(200).json({ GorgunCreateSuccess: true, data: data })
   // return

}