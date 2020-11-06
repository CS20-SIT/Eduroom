const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const contestAnn = async (req, res, next) => {
  const room = await pool.query("SELECT * from");

  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
};


module.exports = { getcontestAnn, postcontestAnn };
