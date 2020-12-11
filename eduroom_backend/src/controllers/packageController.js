const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.createPackage = async(req,res,next)=>{
  const time = await pool.query('SELECT NOW()')
  const data = req.body
  res.status(200).json({ success: true, data: data })
  console.log(data);
  await pool.query('INSERT INTO package(packagename, instructorid, discount, ispublic,detail) VALUES ($1,$2,$3,$4,$5)',
  [data.name,data.instructorid,data.discount,data.ispublic,data.detail])
}

exports.getPackage  = async (req, res, next) => {
  const id = req.query.packageid;
  const data = await pool.query('select * from package where packageid = $1', [id]);
  const package = data.rows;
  // res.status(200).json({ data: package });
  res.send(package);
}


