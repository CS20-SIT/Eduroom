const express = require('express');
const router = express.Router();

const TestRoute = require('./testRoute');
const AuthRoute = require('./authRoute');
const SupportRoute = require('./supportRoute');
const ForumRoute = require('./forumRoute');
const AnalysisRoute = require('./analysisRoute');
const GraderRoute = require('./graderRoute');
const EventRoute = require('./eventRoute');
const registerUemail = require('./registerUemail');
const InstructorRoute = require('./instructorRoute')
const LeaderboardRoute = require('./leaderboardRoute');
const sendEventMail = require('./sendEventMail');
const KahootRoute = require('./kahootRoute');
const PackageRoute = require('./packageRoute')

router.use('/test', TestRoute)
router.use('/auth', AuthRoute)
router.use('/support', SupportRoute)
router.use('/forum', ForumRoute)
router.use('/analysis', AnalysisRoute)
router.use('/grader', GraderRoute)
router.use('/event',EventRoute)
router.use('/registerUemail',registerUemail)
router.use('/sendEventMail',sendEventMail)
router.use('/instructor', InstructorRoute)
router.use('/kahoot', KahootRoute)
router.use('/package', PackageRoute)
router.use('/leaderboard', LeaderboardRoute)

module.exports = router;
