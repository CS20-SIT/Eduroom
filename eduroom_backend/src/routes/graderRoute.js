const express = require("express");
const path = require("path");
const router = express.Router();

const {
  test,
  getAnn,
  postAnn,
  editAnn,
  pTestcase,
  dTestcase,
  dQuestion,
  dSample,
  eQuestion,
} = require("../controllers/graderCreate/test");
const {
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
} = require("../controllers/graderCreate/fame");

const {
	gPreviewQuestions,
	gPreviewContests,
	gContestDetails,
	gContestAnnouncements,
	gContestProblems,
	gContestSubmissions,
	gAnnouncements,
	gQuestionTags,
} = require('../controllers/graderCreate/graderSubmit')

  eQuestionSample,
  eQuestionTestcase,
  gAllAdminLog,
  gAllQuestions,
  gAllTag,
  gQuestion,
  gQuestionSample,
  gQuestionTag,
  gQuestionTestcase,
} = require("../controllers/graderCreate/earth");
const {
  gPreviewQuestions,
  gPreviewContests,
  gContestDetails,
  gContestAnnouncements,
  gContestProblems,
  gContestSubmissions,
  gAnnouncements,
} = require("../controllers/graderCreate/graderSubmit");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd() + "/src/uploadedTestCase"));
    // console.log(path.join(process.cwd() + "/src/uploadedTestCase"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype == "application/zip" ||
//     file.mimetype == "application/x-zip-compressed" ||
//     file.mimetype == "application/zip-compressed"
//   ) {
//     cb(null, true);
//     console.log("fileFilter1");
//   } else {
//     cb(null, false);
//     console.log("fileFilter2");
//   }
// };
// fileFilter: fileFilter
const upload = multer({ storage: storage });
router.post("/ptc", upload.any(), pTestcase);

router.get("/", test);
router.get("/ann", getAnn);
router.post("/cann", postAnn);
router.put("/eann", editAnn);

//fame
router.post("/cadminlog", pAdminLog);
router.post("/ccontest", pContest);
router.post("/ccontestann", pContestAnn);
router.post("/ccontestquestion", pContestQuestion);

//fame v2

router.put("/econtest", eContest);
router.put("/econtestann", eContestAnn);

router.get("/allcontest", gAllContest);

router.get("/contest", gContest);
router.get("/contestann", gContestAnn);
router.get("/contestquestion", gContestQuestion);

//earth
router.post("/cquestion", pQuestion);
router.post("/cquestiontag", pQuestionTag);
router.post("/ctags", pTag);
router.post("/cquestionsample", pQuestionSample);
router.post("/cquestiontestcase", pQuestionTestcase);

//earth v2
router.put("/equestion", eQuestion);
router.put("/equestionsample", eQuestionSample);
router.put("/equestiontestcase", eQuestionTestcase);

router.get("/alladminlog", gAllAdminLog);
router.get("/allquestion", gAllQuestions), router.get("/alltag", gAllTag);

router.get("/question", gQuestion);
router.get("/questionsample", gQuestionSample);
router.get("/questiontag", gQuestionTag);
router.get("/questiontestcase", gQuestionTestcase);

router.delete("/dquestiontestcase", dTestcase);
router.delete("/dquestionsample", dSample);
router.delete("/dquestion", dQuestion);

// eContest,eContestAnn,gAllContest,gContest,gContestAnn,gContestQuestion

// Toei
router.get('/getPreviewQuestion', gPreviewQuestions)
router.get('/getPreviewContest', gPreviewContests)
router.get('/getContestDetail', gContestDetails)
router.get('/getContestAnnouncement', gContestAnnouncements)
router.get('/getContestProblem', gContestProblems)
router.get('/getContestSubmission', gContestSubmissions)
router.get('/getAnnouncement', gAnnouncements)
router.get('/getQuestionTag', gQuestionTags)

module.exports = router;
