const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const pAdminLog = async (req, res, next) => {
  const title = req.body.title;
  const detail = req.body.detail;
  const adminid = "12345678-1234-1234-1234-123456789123";

  await pool.query(
    'INSERT INTO adminLog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [title, detail, adminid]
  );

  res.send({ success: true });
};

const pContest = async (req, res, next) => {
  const title = req.body.title;
  const conRuleType = req.body.conRuleType;
  const description = req.body.description;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const status = req.body.status;
  const adminid = req.body.adminid;

  await pool.query(
    "INSERT INTO contest(title,conRuleType,description,startTime,endTime,status,adminid) VALUES ($1 , $2, $3, $4, $5, $6, $7)",
    [title, conRuleType, description, startTime, endTime, status, adminid]
  );

  res.send({ success: true });
};
const pContestQuestion = async (req, res, next) => {
  const conQuestionNo = req.body.conQuestionNo;
  const conid = req.body.conid;
  const questionId = req.body.questionId;

  await pool.query(
    "INSERT INTO contest_question(conQuestionNo,conid,questionId) VALUES ($1 , $2, $3)",
    [conQuestionNo, conid, questionId]
  );

  res.send({ success: true });
};
const pContestAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const conId = req.body.conid;
  const adminId = "12345678-1234-1234-1234-123456789123";
  const isVisible = req.body.isvisible;

  await pool.query(
    "INSERT INTO contest_announcements(title,description,conId,adminId,isVisible) VALUES ($1 , $2, $3, $4, $5)",
    [title, description, conId, adminId, isVisible]
  );

  res.send({ success: true });
};

//edit by id
const eContest = async (req, res, next) => {
  const conno = req.body.conno;
  const title = req.body.title;
  const conRuleType = req.body.conRuleType;
  const description = req.body.description;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const status = req.body.status;
  const adminid = "12345678-1234-1234-1234-123456789123";
  const id = req.body.id;

  await pool.query(
    'UPDATE contest SET (conno,title,conruletype,description,starttime,endtime,status,"adminid") = ($1 , $2, $3, $4, $5, $6, $7, $8) WHERE id = ($9)',
    [
      conno,
      title,
      conRuleType,
      description,
      startTime,
      endTime,
      status,
      adminid,
      id,
    ]
  );
  res.send({ success: true });
};
const eContestAnn = async (req, res, next) => {
  const coannno = req.body.coannno;
  const conid = req.body.conid;
  const title = req.body.title;
  const description = req.body.description;
  const adminId = req.body.adminid;
  const isVisible = req.body.isvisible;
  console.log(
    "req.body----------------req.body----------------req.body----------------req.body----------------"
  );
  console.log(req.body);
  console.log(
    "req.body----------------req.body----------------req.body----------------req.body----------------"
  );
  await pool.query(
    "UPDATE contest_announcements SET (title,description,adminId,isVisible,conid) = ($1 , $2, $3, $4,$5) WHERE coannno = ($6)",
    [title, description, adminId, isVisible, conid, coannno]
  );
  res.send({ success: true });
};

//get all
const gAllContest = async (req, res, next) => {
  const data = await pool.query("select * from contest order by 1 DESC ");
  const ann = data.rows;
  res.send(ann);
};

//get by id
const gContest = async (req, res, next) => {
  const data = await pool.query("select * from contest  where conno = 1 ");
  const conann = data.rows;
  res.send(conann);
};
const setTime = (text) => {
  text = "" + text;
  return text.substr(4, 11) + " At " + text.substr(16, 5);
};
const gContestAnn = async (req, res, next) => {
  const id = req.query.conid;
  const data = await pool.query(
    `select row_number() over(order by a.coannno) as id ,a.coannno,a.conid, a.title , a.adminid,a.description , b.displayName ,a.time ,a.isvisible  from contest_announcements a , admin_login b where a.adminid = b.adminid and conid = '${id}' order by 1 DESc `
  );
  const conann = data.rows;
  if (conann != null) {
    conann.map((i) => {
      i.time = setTime(i.time);
    });
  }

  res.send(conann);
};
const gContestQuestion = async (req, res, next) => {
  const data = await pool.query(
    "select * from contest_question  where conid = 1 and questionid = 1"
  );
  const conann = data.rows;
  res.send(conann);
};

module.exports = {
  pAdminLog,
  pContest,
  pContestAnn,
  pContestQuestion,
  eContest,
  eContestAnn,
  gAllContest,
  gContest,
  gContestAnn,
  gContestQuestion,
};

///// dont forget to go to routes => graderRoute  and add your api
