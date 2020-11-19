const pool = require('../database/db')
exports.getEvent = async (req, res, next) => {

    const data = await pool.query(
      'select *,EXTRACT(DAY FROM startdate) as startday,EXTRACT(HOUR FROM starttime) as Hstart, EXTRACT(MINUTE FROM starttime) as Mstart,EXTRACT(HOUR FROM endtime) as Hend, EXTRACT(MINUTE FROM endtime) as Mend from global_event')
 
    res.send(data.rows)
    return
}

exports.createEvent = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const adminid = req.body.adminid;
  await pool.query(
    'INSERT INTO announcements(title,description,"adminid") VALUES ($1 , $2, $3)',
    [title, description, adminid]
  );

  res.send({ title, description, adminid });








    //const data = req.body;
    //console.log(data);
     //await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
       //  [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

   // res.status(200).json({ GorgunCreateSuccess: true, data: data })
   // return

}