const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const pQuestion = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const adminid = req.user.id;
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

  const newTags = req.body.newTags;
  const existTags = req.body.existTags;

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
      const lgTitle = "ADD Question ";
      const lgDetail = `${id}.${title} `;
      pool.query(
        'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
        [lgTitle, lgDetail, adminid]
      );
      res.send({ success: true, id: result.rows[0].id });
    }
  );
};

const pQuestionSample = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const questionId = req.body.questionId;
  const samples = req.body.samples;
  try {
    samples.forEach((s) => {
      pool.query(
        "INSERT INTO questionSample(questionId,sampleNo, intput, output) VALUES ($1 , $2, $3, $4)",
        [questionId, s.index, s.inputsample, s.outputsample]
      );
    });
  } catch (error) {
    console.error(error);
  }

  res.send({ success: true });
};
const pQuestionTestcase = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }

  const questionId = req.body.intput;
  const fileNo = req.body.fileNo;
  const filePath = req.body.filePath;
  0;
  await pool.query(
    "INSERT INTO QuestionTestcases(questionId,fileNo,filePath) VALUES ($1 , $2, $3)",
    [questionId, fileNo, filePath]
  );
  res.send({ success: true });
};
//edit by id
const eQuestion = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const adminid = req.user.id;
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
  const id = req.body.id;

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
  const lgTitle = "EDIT Question";
  const lgDetail = `${id}.${title} `;
  await pool.query(
    'INSERT INTO adminlog(title,detail,"adminid") VALUES ($1 , $2, $3)',
    [lgTitle, lgDetail, adminid]
  );

  res.send({ success: true });
};
const eQuestionSample = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const questionId = req.body.questionId;
  const sampleNo = req.body.sampleNo;
  const intput = req.body.intput;
  const output = req.body.output;

  await pool.query(
    "UPDATE questionSample SET (intput, output) = ($1 , $2) WHERE questionId = ($3) and sampleNo = ($4)",
    [intput, output, questionId, sampleNo]
  );
  res.send({ success: true });
};
const eQuestionTestcase = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const questionId = req.body.questionId;
  const fileNo = req.body.fileNo;
  const filePath = req.body.filePath;
  await pool.query(
    "UPDATE questionTestcases SET filePath = $1 WHERE questionId = ($2) and fileNo = ($3)",
    [filePath, questionId, fileNo]
  );

  res.send({ success: true });
};

//get all
const gAllAdminLog = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const setTime = (text) => {
    text = "" + text;
    return text.substr(4, 11) + " At " + text.substr(16, 5);
  };
  const data = await pool.query(
    "select logno ,title,detail,timestamp,displayname from adminLog a , admin_login b  where a.adminid = b.adminid order by 1 DESC "
  );
  const ann = data.rows;
  if (ann != null) {
    ann.map((i) => {
      i.timestamp = setTime(i.timestamp);
    });
  }
  res.send(ann);
};
const gAllQuestions = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const query =
    "select a.id, a.title , a.difficulty , a.visibility, b.displayName , a.adminid from Questions a, admin_login b  where a.adminid = b.adminid order by 1 DESC ";
  const data = await pool.query(query);
  const ann = data.rows;
  res.send(ann);
};
const gAllTag = async (req, res, next) => {
  const data = await pool.query("select * from tags ");
  const ann = data.rows;
  res.send(ann);
};

//get by id `````````````````````````````````
const gQuestion = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const id = req.query.id;
  const data = await pool.query(`select * from Questions  where id = '${id}' `);
  const conann = data.rows;
  res.send(conann);
};
const gQuestionTag = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const id = req.query.id;
  const data = await pool.query(
    `select  q.tagid as tagid , tagname from questiontag q , tags t  where q.questionid = '${id}'and t.tagid = q.tagid  `
    // `select t.tagname from questiontag q , tags t where q.questionid = '${id}' and t.questionid = q.questionId `
  );
  const conann = data.rows;
  res.send(conann);
};
const gQuestionSample = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const id = req.query.id;
  const data = await pool.query(
    `select intput as inputSample, output as outputSample , sampleno as index from questionSample  where questionId = '${id}' `
  );
  const conann = data.rows;
  res.send(conann);
};
const gQuestionTestcase = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const id = req.query.id;
  const data = await pool.query(
    `select * from questionTestcases  where questionId = '${id}' `
  );
  const conann = data.rows;
  res.send(conann);
};
const gNonExistQuestion = async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Unauthorize", 401));
  }
  const id = req.query.conno;
  const data = await pool.query(
    `select id, title from Questions  where id not in ( select questionid from contest_question where conid = '${id}' )  `
  );
  const conann = data.rows;
  res.send(conann);
};

module.exports = {
  pQuestion,
  gNonExistQuestion,

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
