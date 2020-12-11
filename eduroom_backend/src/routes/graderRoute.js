const express = require('express')
const path = require('path')
const router = express.Router()

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
} = require('../controllers/graderCreate/delete')
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
} = require('../controllers/graderCreate/contest')

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
} = require('../controllers/graderCreate/question')
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
} = require('../controllers/graderCreate/graderSubmit')

const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(process.cwd() + '/src/uploadedTestCase'))
	},
	filename: (req, file, cb) => {
		// console.log(file);
		cb(null, Date.now() + file.originalname)
	},
})
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
const upload = multer({ storage: storage })
router.post('/ptc', upload.any(), pTestcase)
router.get('/', test)
router.get('/ann', getAnn)
router.post('/cann', postAnn)
router.put('/eann', editAnn)
router.post('/ccontest', pContest)
router.post('/ccontestann', pContestAnn)
router.post('/ccontestquestion', pContestQuestion)

router.put('/econtest', eContest)
router.put('/econtestann', eContestAnn)
router.get('/allcontest', gAllContest)
router.get('/contest', gContest)
router.get('/contestann', gContestAnn)
router.get('/contestquestion', gContestQuestion)

router.post('/cquestion', pQuestion)
router.post('/cquestiontag', pQuestionTag)
router.post('/ccontestexistquestion', pContestExistingQuestion)
router.post('/ctags', pTag)
router.post('/cquestionsample', pQuestionSample)
router.post('/cquestiontestcase', pQuestionTestcase)

router.put('/equestion', eQuestion)
router.put('/equestionsample', eQuestionSample)
router.put('/equestiontestcase', eQuestionTestcase)

router.get('/alladminlog', gAllAdminLog)
router.get('/allquestion', gAllQuestions)
router.get('/alltag', gAllTag)
router.get('/addexistingquestion', gNonExistQuestion)
router.get('/question', gQuestion)
router.get('/questionsample', gQuestionSample)
router.get('/questiontag', gQuestionTag)
router.get('/questiontestcase', gQuestionTestcase)

router.delete('/dquestiontestcase', dTestcase)
router.delete('/dquestionsample', dSample)
router.delete('/dquestion', dQuestion)
router.delete('/dcontestquestion', dConQuestion)

// Toei
router.get('/getPreviewQuestion', gPreviewQuestions)
router.get('/getPreviewContest', gPreviewContests)
router.get('/getContestDetail', gContestDetails)
router.get('/getContestAnnouncement', gContestAnnouncements)
router.get('/getContestProblem', gContestProblems)
router.get('/getContestSubmission', gContestSubmissions)
router.get('/getAnnouncement', gAnnouncements)
router.get('/getQuestionTag', gQuestionTags)
router.get('/getQuestionByTag', gQuestionByTag)
router.get('/getHomePreviewContest', gHomePreviewContests)
router.get('/getAnnouncementById', gAnnouncementById)
router.get('/CountAllQuestion', gCountAllQuestions)

module.exports = router
