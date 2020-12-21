const express = require("express");
const path = require("path");
const {
  jwtAuthenicate,
  jwtAdminAuthenticate,
} = require("../middleware/jwtAuthenticate");

const router = express.Router();

const {
  test,
  getAnn,
  postAnn,
  editAnn,
  pTestcase,
  dTestcase,
  dQuestion,
  dConQuestion,
  dSample,
  eQuestion,
} = require("../controllers/graderCreate/delete");
const {
  pContest,
  pContestAnn,
  pContestQuestion,
  eContest,
  eContestAnn,
  gAllContest,
  gContest,
  gContestAnn,
  pContestExistingQuestion,
  gContestQuestion,
} = require("../controllers/graderCreate/contest");

const {
  pQuestion,
  pQuestionTag,
  pTag,
  pQuestionSample,
  pQuestionTestcase,
  gNonExistQuestion,
  eQuestionSample,
  eQuestionTestcase,
  gAllAdminLog,
  gAllQuestions,
  gAllTag,
  gQuestion,
  gQuestionSample,
  gQuestionTag,
  gQuestionTestcase,
} = require("../controllers/graderCreate/question");
const {
  gPreviewQuestions,
  gPreviewContests,
  gContestDetails,
  gContestAnnouncements,
  gContestProblems,
  gContestSubmissions,
  gAnnouncements,
  gQuestionTags,
  gQuestionByTag,
  gHomePreviewContests,
  gAnnouncementById,
  gCountAllQuestions,
  gOIRankingTopSix,
  gACMRankingTopSix,
  gContestAnnouncementDetail,
  gContestQuestionDetail,
  gQuestionTestCase,
  gQuestionDetail,
  gQuestionSubmission,
  gCountQuestionByTag,
} = require("../controllers/graderCreate/graderSubmit");
const {
  uploadToGCSHandler,
  uploadToLocalHandler,
} = require("../middleware/multer");
const {
  pingGrader,
  createSubmission,
  getSubmission,
} = require("../controllers/graderSystem");

router.post(
  "/ptc",
  uploadToGCSHandler("question_testcase/"),
  jwtAdminAuthenticate,
  pTestcase
);
router.get("/", test);
router.get("/ann", jwtAdminAuthenticate, getAnn);
router.post("/cann", jwtAdminAuthenticate, postAnn);
router.put("/eann", jwtAdminAuthenticate, editAnn);
router.post("/ccontest", jwtAdminAuthenticate, pContest);
router.post("/ccontestann", jwtAdminAuthenticate, pContestAnn);
router.post("/ccontestquestion", jwtAdminAuthenticate, pContestQuestion);

router.put("/econtest", jwtAdminAuthenticate, eContest);
router.put("/econtestann", jwtAdminAuthenticate, eContestAnn);
router.get("/allcontest", jwtAdminAuthenticate, gAllContest);
router.get("/contest", jwtAdminAuthenticate, gContest);
router.get("/contestann", jwtAdminAuthenticate, gContestAnn);
router.get("/contestquestion", jwtAdminAuthenticate, gContestQuestion);

router.post("/cquestion", jwtAdminAuthenticate, pQuestion);
router.post(
  "/ccontestexistquestion",
  jwtAdminAuthenticate,
  pContestExistingQuestion
);
router.post("/cquestionsample", jwtAdminAuthenticate, pQuestionSample);
router.post("/cquestiontestcase", jwtAdminAuthenticate, pQuestionTestcase);

router.put("/equestion", jwtAdminAuthenticate, eQuestion);
router.put("/equestionsample", jwtAdminAuthenticate, eQuestionSample);
router.put("/equestiontestcase", jwtAdminAuthenticate, eQuestionTestcase);

router.get("/alladminlog", jwtAdminAuthenticate, gAllAdminLog);
router.get("/allquestion", jwtAdminAuthenticate, gAllQuestions);
router.get("/alltag", jwtAdminAuthenticate, gAllTag);
router.get("/addexistingquestion", jwtAdminAuthenticate, gNonExistQuestion);
router.get("/question", jwtAdminAuthenticate, gQuestion);
router.get("/questionsample", jwtAdminAuthenticate, gQuestionSample);
router.get("/questiontag", jwtAdminAuthenticate, gQuestionTag);
router.get("/questiontestcase", jwtAdminAuthenticate, gQuestionTestcase);

router.delete("/dquestiontestcase", jwtAdminAuthenticate, dTestcase);
router.delete("/dquestionsample", jwtAdminAuthenticate, dSample);
router.delete("/dquestion", jwtAdminAuthenticate, dQuestion);
router.delete("/dcontestquestion", jwtAdminAuthenticate, dConQuestion);

// Toei
router.get("/getPreviewQuestion", gPreviewQuestions);
router.get("/CountAllQuestion", gCountAllQuestions);
router.get("/getAnnouncement", gAnnouncements);
router.get("/getPreviewContest", gPreviewContests);
router.get("/getContestDetail", gContestDetails);
router.get("/getContestAnnouncement", gContestAnnouncements);
router.get("/getContestProblem", gContestProblems);
router.get("/getContestSubmission", jwtAuthenicate, gContestSubmissions);
router.get("/getQuestionTag", gQuestionTags);
router.get("/getQuestionByTag", gQuestionByTag);
router.get("/getHomePreviewContest", gHomePreviewContests);
router.get("/getAnnouncementById", gAnnouncementById);
router.get("/getOIRankingTopSix", gOIRankingTopSix);
router.get("/getACMRankingTopSix", gACMRankingTopSix);
router.get("/getContestAnnouncementDetail", gContestAnnouncementDetail);
router.get("/getContestQuestionDetail", gContestQuestionDetail);
router.get("/getQuestionTestCase", gQuestionTestCase);
router.get("/getQuestionDetail", gQuestionDetail);
router.get("/getQuestionSubmission", jwtAuthenicate, gQuestionSubmission);
router.get("/getCountQuestionByTag", gCountQuestionByTag);

router.get("/ping", pingGrader);
router.post("/submission", jwtAuthenicate, createSubmission);
router.get("/submission", jwtAuthenicate, getSubmission);

module.exports = router;
