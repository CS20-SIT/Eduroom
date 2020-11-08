const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const pQuestion = async (req, res, next) => {
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

  const newTagsIds = [];
  console.log(newTags);
  newTags.forEach((t) => {
    console.log(" 1st");
    console.log(t);
    // await pool.query("INSERT INTO tags (tagName) VALUES ($1) RETURNING tagid", [
    //   t, function (err, result, fields) {
    //     if (err) throw err;
    //     newTagsIds.push(result.rows[0].tagid)
    //   }
    // ]);
  });

  pool.query(
    "INSERT INTO Questions(title,description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType,adminid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING id",
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
    ],
    function (err, result, fields) {
      if (err) throw err;
      const id = result.rows[0].id;
      console.log("2nd");
      console.log(newTagsIds);
      newTagsIds.forEach((t) => {
        console.log("3rd");
        // await pool.query("INSERT INTO questiontag(questionId,tagId) VALUES ($1 , $2)",
        //  [id, t]);
      });

      //  existTags.forEach(t => {
      //    await pool.query("INSERT INTO questiontag(questionId,tagId) VALUES ($1 , $2)",
      //    [id, t]); });
    }
  );

  res.send({ success: true });
};

const pQuestionTag = async (req, res, next) => {
  const questionId = 2;
  const tagId = 2;

  await pool.query(
    "INSERT INTO questiontag(questionId,tagId) VALUES ($1 , $2)",
    [questionId, tagId]
  );
  res.send({ success: true });
};
const pTag = async (req, res, next) => {
  const tagId = 2;
  const tagName = "testName";

  await pool.query("INSERT INTO tags(tagId,tagName) VALUES ($1 , $2)", [
    tagId,
    tagName,
  ]);
  res.send({ success: true });
};
const pQuestionSample = async (req, res, next) => {
  const questionId = 2;
  const sampleNo = 2;
  const intput = "mockup data here";
  const output = "mockup data here";

  await pool.query(
    "INSERT INTO questionSample(questionId,sampleNo, intput, output) VALUES ($1 , $2, $3, $4)",
    [questionId, sampleNo, intput, output]
  );
  res.send({ success: true });
};
const pQuestionTestcase = async (req, res, next) => {
  const questionId = 2;
  const fileNo = 2;
  const filePath = "/file/book";
  0;
  await pool.query(
    "INSERT INTO QuestionTestcases(questionId,fileNo,filePath) VALUES ($1 , $2, $3)",
    [questionId, fileNo, filePath]
  );
  res.send({ success: true });
};
//edit by id
const eQuestion = async (req, res, next) => {
  const title = "test01";
  const description = "mockup data here";
  const hint = "mockup data here";
  const intputDes = "mockup data here";
  const outputDes = "mockup data here";
  const timeLimit = 120;
  const memoryLimit = 120;
  const difficulty = "easy";
  const visibility = false;
  const ruleType = "acm";
  const adminid = "12345678-1234-1234-1234-123456789123";
  const id = 1;

  await pool.query(
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
    ]
  );

  res.send({ success: true });
};
const eQuestionSample = async (req, res, next) => {
  const questionId = 2;
  const sampleNo = 2;
  const intput = "new mockup";
  const output = "new mockup";

  await pool.query(
    "UPDATE questionSample SET (intput, output) = ($1 , $2) WHERE questionId = ($3) and sampleNo = ($4)",
    [intput, output, questionId, sampleNo]
  );
  res.send({ success: true });
};
const eQuestionTestcase = async (req, res, next) => {
  const questionId = 2;
  const fileNo = 2;
  const filePath = "/file/isustoo";
  await pool.query(
    "UPDATE questionTestcases SET filePath = $1 WHERE questionId = ($2) and fileNo = ($3)",
    [filePath, questionId, fileNo]
  );

  res.send({ success: true });
};

//get all
const gAllAdminLog = async (req, res, next) => {
  const data = await pool.query("select * from adminLog ");
  const ann = data.rows;
  res.send(ann);
};
const gAllQuestions = async (req, res, next) => {
  const data = await pool.query("select * from Questions ");
  const ann = data.rows;
  res.send(ann);
};
const gAllTag = async (req, res, next) => {
  const data = await pool.query("select * from tags ");
  const ann = data.rows;
  res.send(ann);
};

//get by id
const gQuestion = async (req, res, next) => {
  const data = await pool.query("select * from Questions  where id = 1 ");
  const conann = data.rows;
  res.send(conann);
};
const gQuestionTag = async (req, res, next) => {
  const data = await pool.query(
    "select * from questiontag  where questionId = 1 "
  );
  const conann = data.rows;
  res.send(conann);
};
const gQuestionSample = async (req, res, next) => {
  const data = await pool.query(
    "select * from questionSample  where questionId = 1 "
  );
  const conann = data.rows;
  res.send(conann);
};
const gQuestionTestcase = async (req, res, next) => {
  const data = await pool.query(
    "select * from questionTestcases  where questionId = 2 "
  );
  const conann = data.rows;
  res.send(conann);
};

module.exports = {
  pQuestion,
  pQuestionTag,
  pTag,
  pQuestionSample,
  pQuestionTestcase,
  eQuestion,
  eQuestionSample,
  eQuestionTestcase,
  gAllAdminLog,
  gAllQuestions,
  gAllTag,
  gQuestion,
  gQuestionSample,
  gQuestionTag,
  gQuestionTestcase,
};

///// dont forget to go to routes => graderRoute  and add your api
