const ErrorResponse = require("../utils/errorResponse");
const pool = require("../database/db");

const test = async (req, res, next) => {
  const time = await pool.query("SELECT NOW()");

  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  res.send({ success: true });
  return;
};

const getAnn = async (req, res, next) => {
  const data = await pool.query("select * from announcements order by 1 DESC ");
  const ann = data.rows;
  res.send(ann);
};
const postAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const adminid = req.body.adminid;
  //   await pool.query("INSERT INTO users(email,password) VALUES($1,$2)", [
  //     email,
  //     hashedPassword,
  //   ]);
  await pool.query(
    'INSERT INTO announcements(title,description,"adminid") VALUES ($1 , $2, $3)',
    [title, description, adminid]
  );

  res.send({ success: true, title, description, adminid });
};
module.exports = { getAnn, test, postAnn };
