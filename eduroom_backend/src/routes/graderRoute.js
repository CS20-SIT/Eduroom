const express = require('express')
const router = express.Router()
const { test, getAnn, postAnn,editAnn } = require('../controllers/graderCreate/test')
const {  pAdminLog,pContest,pContestAnn,pContestQuestion } = require('../controllers/graderCreate/fame')
const {  pQuestion,pQuestionTag,pQuestionSample, pQuestionTestcase } = require('../controllers/graderCreate/earth')

router.get('/', test)
router.get('/ann', getAnn)
router.post('/cann', postAnn)
router.put('/eann',editAnn)


//fame
router.post('/cadminlog',pAdminLog)
router.post('/ccontest',pContest)
router.post('/ccontestann',pContestAnn)
router.post('/ccontestquestion',pContestQuestion)



//earth
router.post('/cquestion',pQuestion)
router.post('/cquestiontag',pQuestionTag)
router.post('/cquestionsample',pQuestionSample)
router.post('/cquestiontestcase',pQuestionTestcase)



module.exports = router