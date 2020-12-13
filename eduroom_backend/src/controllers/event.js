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
  const title = req.body.title;
  const type = req.body.type;
  const detail = req.body.description;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const adminid = req.body.adminid;
  const place = req.body.place;
  await pool.query(
    `insert into global_event(title, startdate, enddate, starttime, endtime, detail, place, typeid, adminid) 
        VALUES ($1 , $2, $3 , $4, $5, $6, $7, $8, $9)`
    [title,startDate,endDate,startTime,endTime,detail,place,type,adminid]
  );
  const lgTitle = "Add Event";
  const lgDetail = `Event title.${title}`;
  await pool.query(
    'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [lgTitle, lgDetail, adminid]
  );
  res.send({ success: true });








    //const data = req.body;
    //console.log(data);
     //await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
       //  [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

   // res.status(200).json({ GorgunCreateSuccess: true, data: data })
   // return

}