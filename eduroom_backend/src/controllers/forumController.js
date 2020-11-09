const ErrorResponse = require("../utils/errorResponse");
const pool = require("../database/db");

exports.forumTest = async (req, res, next) => { 
  const data = [
    { username: "00001", topic: "topic01", date: "2020-01-01" },
    { username: "00002", topic: "topic02", date: "2020-01-02" },
  ];
  res.status(200).json({ success: true, data:data });
  return;
};

exports.showForum = async(req,res,next) =>{
  const data = await pool.query('select * from forum_form')
  const forum = data.rows
  res.status(200).json({success:true, data:forum})
}
exports.selectForum = async(req,res,next) =>{
  const id = req.body.id
  const data = await pool.query(`select * from forum_form where forumid=${id}`)
  const forum = data.rows
  res.status(200).json({success:true, data:forum})
}

exports.createForum = async (req, res, next) => {
  console.log(req.body)
  res.status(200).json({success: true });
  return;
};


//
