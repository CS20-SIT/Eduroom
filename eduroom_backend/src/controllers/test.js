const ErrorResponse = require("../utils/errorResponse");
const pool = require("../database/db");

const test = async (req, res, next) => {
  const time = await pool.query("SELECT NOW()");

  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  res.send({ success: true });
  return;
};

const getAnn = async (req, res, next) => {
  const data = await pool.query("select * from announcements ");
  const ann = data.rows;
  res.send(ann);
};
const postAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const adminId = req.body.adminId;
  //   await pool.query("INSERT INTO users(email,password) VALUES($1,$2)", [
  //     email,
  //     hashedPassword,
  //   ]);
  await pool.query(
    'INSERT INTO announcements(title,description,"adminId") VALUES ($1 , $2, $3)',
    [title, description, adminId]
  );

  res.send({ success: true, title, description, adminId });
};
module.exports = { getAnn, test, postAnn };
