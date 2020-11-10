const express = require('express')
const router = express.Router()

const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const SupportRoute = require('./supportRoute')
const ForumRoute = require('./forumRoute')
const AnalysisRoute = require('./analysisRoute')
const GraderRoute = require('./graderRoute')
const EventRoute = require('./eventRoute')
const registerUemail = require('./registerUemail');
const sendEventMail = require('./sendEventMail')
const InstructorRoute = require('./instructorRoute')
const LeaderboardRoute = require('./leaderboardRoute');

router.use('/test', TestRoute)
router.use('/auth', AuthRoute)
router.use('/support', SupportRoute)
router.use('/forum', ForumRoute)
router.use('/analysis', AnalysisRoute)
router.use('/grader', GraderRoute)
router.use('/event',EventRoute)
router.use('/registerUemail',registerUemail)
router.use('/sendEventMail',sendEventMail)
router.use('/instructor',InstructorRoute)
router.use('/leaderboard', LeaderboardRoute)

module.exports = router
