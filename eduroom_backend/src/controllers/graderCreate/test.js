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
    "select  a.id, a.title , a.description , b.displayName ,a.time ,a.isvisible,a.adminid from announcements a, admin_login b  where a.adminid = b.adminid order by 1 DESC "
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

  pool.query(
    'INSERT INTO announcements(title,description,"adminid",isvisible) VALUES ($1 , $2, $3,$4) returning id',
    [title, description, adminid, visible],
    function (err, result, fields) {
      if (err) throw err;
      const id = result.rows[0].id;
      const lgTitle = "ADD Announcement";
      const lgDetail = `${id}.${title} `;
      pool.query(
        'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
        [lgTitle, lgDetail, adminid]
      );
    }
  );

  res.send({ success: true, title, description, adminid });
};

const editAnn = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const adminid = req.body.adminid;
  const visible = req.body.isvisible;
  const id = req.body.id;

  await pool.query(
    'UPDATE announcements SET (title,description,"adminid",isvisible) = ($1 , $2, $3 ,$4) WHERE id = ($5)',
    [title, description, adminid, visible, id]
  );
  const lgTitle = "EDIT Announcement";
  const lgDetail = `${id}.${title} `;
  await pool.query(
    'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [lgTitle, lgDetail, adminid]
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

const dTestcase = async (req, res, next) => {
  console.log("-----------------------------------------------");
  const id = req.query.id;
  console.log(req.query);

  await pool.query(`DELETE FROM QuestionTestcases WHERE questionId = '${id}'`);
  res.send({ success: true });
};

const dSample = async (req, res, next) => {
  console.log("-----------------------------------------------");
  const id = req.query.id;
  console.log(req.query);

  await pool.query(`DELETE FROM questionSample WHERE questionId = '${id}'`);
  res.send({ success: true });
};

const dQuestion = async (req, res, next) => {
  console.log("-----------------------------------------------");
  const id = req.query.id;
  const title = req.query.title;
  const adminid = req.query.adminid;
  console.log(req.query);
  await pool.query(`DELETE FROM QuestionTestcases WHERE questionId = '${id}'`);
  await pool.query(`DELETE FROM Questiontag WHERE questionId = '${id}'`);
  await pool.query(`DELETE FROM questionSample WHERE questionId = '${id}'`);
  await pool.query(`DELETE FROM contest_question WHERE questionId = '${id}'`);
  await pool.query(`DELETE FROM question_attempt WHERE questionId = '${id}'`);
  await pool.query(`DELETE FROM questions WHERE id = '${id}'`);
  const lgTitle = "DELETE Question";
  const lgDetail = `${id}.${title} `;
  await pool.query(
    'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [lgTitle, lgDetail, adminid]
  );
  res.send({ success: true });
};

const dConQuestion = async (req, res, next) => {
  console.log("-----------------------------------------------");
  const questionid = req.query.id;
  const conid = req.query.conno;
  const title = req.query.title;
  const adminid = req.query.adminid;

  await pool.query(
    `DELETE FROM contest_question WHERE questionId = '${questionid}' and conid = '${conid}'`
  );
  const lgTitle = "DELETE Contest Question";
  const lgDetail = `Contest No.${conid}, ${questionid}.${title} `;
  await pool.query(
    'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [lgTitle, lgDetail, adminid]
  );

  res.send({ success: true });
};
const eQuestion = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const hint = req.body.hint;
  const intputDes = req.body.intputDes;
  const outputDes = req.body.outputDes;
  const timeLimit = req.body.timeLimit;
  const memoryLimit = req.body.memoryLimit;
  const difficulty = req.body.difficulty;
  const visibility = req.body.visibility;
  const ruleType = req.body.ruleType;
  const adminid = req.body.adminid;
  const newTags = req.body.newTags;
  const existTags = req.body.existTags;
  const id = req.body.id;
  await pool.query(`DELETE FROM questiontag WHERE questionId = '${id}'`);

  pool.query(
    "UPDATE questions SET (title,description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType,adminid) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) WHERE id = ($12)",
    [
      title,
      description,
      hint,
      intputDes,
      outputDes,
      timeLimit,
      memoryLimit,
      difficulty,
      visibility,
      ruleType,
      adminid,
      id,
    ],
    function (err, result, fields) {
      if (err) throw err;

      newTags.forEach((t) => {
        pool.query(
          "INSERT INTO tags (tagName) VALUES ($1) RETURNING tagid",
          [t],
          function (err, result, fields) {
            if (err) throw err;

            pool.query(
              "INSERT INTO questiontag(questionId,tagId) VALUES ($1 , $2)",
              [id, result.rows[0].tagid]
            );
          }
        );
      });

      existTags.forEach((t) => {
        pool.query(
          "INSERT INTO questiontag(questionId,tagId) VALUES ($1 , $2)",
          [id, t]
        );
      });
      const lgTitle = "EDIT Question";
      const lgDetail = `${id}.${title} `;
      pool.query(
        'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
        [lgTitle, lgDetail, adminid]
      );
      res.send({ success: true, id: id });
    }
  );
};

module.exports = {
  getAnn,
  test,
  postAnn,
  editAnn,
  pTestcase,
  dTestcase,
  dSample,
  dQuestion,
  eQuestion,
  dConQuestion,
};
