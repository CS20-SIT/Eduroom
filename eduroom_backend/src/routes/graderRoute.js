const express = require('express')
const router = express.Router()
const { test, getAnn, postAnn,editAnn } = require('../controllers/graderCreate/test')
const {  pAdminLog,pContest,pContestAnn,pContestQuestion,eContest,eContestAnn,gAllContest,gContest,gContestAnn,gContestQuestion} = require('../controllers/graderCreate/fame')
const {  pQuestion,pQuestionTag,pTag,pQuestionSample, pQuestionTestcase,eQuestion,eQuestionSample,eQuestionTestcase,gAllAdminLog,gAllQuestions,gAllTag,gQuestion,gQuestionSample,gQuestionTag,gQuestionTestcase } = require('../controllers/graderCreate/earth')

router.get('/', test)
router.get('/ann', getAnn)
router.post('/cann', postAnn)
router.put('/eann',editAnn)


//fame
router.post('/cadminlog',pAdminLog)
router.post('/ccontest',pContest)
router.post('/ccontestann',pContestAnn)
router.post('/ccontestquestion',pContestQuestion)


//fame v2

router.put('/econtest',eContest)
router.put('/econtestann',eContestAnn)

router.get('/allcontest',gAllContest)

router.get('/contest',gContest)
router.get('/contestann',gContestAnn)
router.get('/contestquestion',gContestQuestion)


//earth
router.post('/cquestion',pQuestion)
router.post('/cquestiontag',pQuestionTag)
router.post('/ctags',pTag)
router.post('/cquestionsample',pQuestionSample)
router.post('/cquestiontestcase',pQuestionTestcase)


//earth v2
router.put('/equestion',eQuestion)
router.put('/equestionsample',eQuestionSample)
router.put('/equestiontestcase',eQuestionTestcase)

router.get('/alladminlog',gAllAdminLog)
router.get('/allquestion',gAllQuestions),
router.get('/alltag',gAllTag)

router.get('/question',gQuestion)
router.get('/questionsample',gQuestionSample)
router.get('/questiontag',gQuestionTag)
router.get('/questiontestcase',gQuestionTestcase)






// eContest,eContestAnn,gAllContest,gContest,gContestAnn,gContestQuestion

module.exports = router