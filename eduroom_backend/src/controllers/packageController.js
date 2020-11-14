const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.createPackage = async(req,res,next)=>{
  const time = await pool.query('SELECT NOW()')
  const data = req.body
  res.status(200).json({ success: true, data: data })
  console.log(data);
  // await pool.query('INSERT INTO package(packageid, packagename, instructorid, discount, ispublic) VALUES ($1,$2,$3,$4,$5)',
  // [data.packageid,data.packagename,data.instructorid,data.discount,data.ispublic])
}

// exports.getPackage  = async (req, res, next) => {
//   const data = await pool.query('select * from package')
//   res.status(200).json({ success: true })
// }


// exports.createEvent = async (req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place,duration,eventid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING * ',
//         [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place, data.duration, data.eventid])

//     res.status(200).json({ GorgunCreateSuccess: true, data: data })
//     return

// }