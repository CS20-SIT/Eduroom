const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const test = async (req, res, next) => {
  const time = await pool.query("SELECT NOW()");

  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  res.send({ success: true });
  return;
};
const setTime = (text) => {
  text = "" + text;
  return text.substr(4, 11) + " At " + text.substr(16, 5);
};
const getAnn = async (req, res, next) => {
  const data = await pool.query(
    "select a.id, a.title , a.description , b.displayName ,a.time ,a.isvisible from announcements a, admin_login b  where a.adminid = b.adminid order by 1 DESC "
  );
  const ann = data.rows;
  if (ann != null) {
    ann.map((i) => {
      i.time = setTime(i.time);
    });
  }
  res.send(ann);
};
const postAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const adminid = req.body.adminid;
  const visible = req.body.isvisible;

  await pool.query(
    'INSERT INTO announcements(title,description,"adminid",isvisible) VALUES ($1 , $2, $3,$4)',
    [title, description, adminid, visible]
  );

  res.send({ success: true, title, description, adminid });
};

const editAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  // const adminid = req.body.adminid
  const adminid = "12345678-1234-1234-1234-123456789123";
  const visible = req.body.isvisible;
  const id = req.body.id;

  await pool.query(
    'UPDATE announcements SET (title,description,"adminid",isvisible) = ($1 , $2, $3 ,$4) WHERE id = ($5)',
    [title, description, adminid, visible, id]
  );

  res.send({ success: true, title, description, adminid });
};

const path = require("path");

const pTestcase = (req, res, next) => {
  const questionId =
    typeof req.body.questionid == "string"
      ? req.body.questionid
      : req.body.questionid[0];

  // console.log(req.body);
  // console.log(req.body.questionid);
  let fileNo = 1;
  //stackoverflow.com/questions/55586619/how-to-save-file-locally-and-save-path-on-database-using-multer-on-angular

  const testCases = req.files;

  try {
    testCases.forEach((t) => {
      pool.query(
        "INSERT INTO QuestionTestcases(questionId,fileNo,filePath) VALUES ($1 , $2, $3)",
        [questionId, fileNo, t.path]
      );
      fileNo++;
    });
  } catch (error) {
    console.error(error);
  }
};
module.exports = { getAnn, test, postAnn, editAnn, pTestcase };
