const express = require('express')
const router = express.Router()

const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const SupportRoute = require('./supportRoute')
const ForumRoute = require('./forumRoute')
const AnalysisRoute = require('./analysisRoute')
const GraderRoute = require('./graderRoute')
const EventRoute = require('./eventRoute')
const CourseRoute = require('./courseRoute')

router.use('/test', TestRoute)
router.use('/auth', AuthRoute)
router.use('/support', SupportRoute)
router.use('/forum', ForumRoute)
router.use('/analysis', AnalysisRoute)
router.use('/grader', GraderRoute)
router.use('/event',EventRoute)
router.use('/course', CourseRoute)

module.exports = router
