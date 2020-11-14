const express = require('express');
const router = express.Router();

const TestRoute = require('./testRoute');
const AuthRoute = require('./authRoute');
const SupportRoute = require('./supportRoute');
const AnalysisRoute = require('./analysisRoute');
const ForumRoute = require('./forumRoute');
const GraderRoute = require('./graderRoute');
const EventRoute = require('./eventRoute');
const uDiscountRoute = require('./uDiscountRoute');
const InstructorRoute = require('./instructorRoute')
const LeaderboardRoute = require('./leaderboardRoute');
const sendEventMail = require('./sendEventMail');
const KahootRoute = require('./kahootRoute');
const PackageRoute = require('./packageRoute')
const CoinRoute = require('./coinRoute');
const ChatRoute = require('./chatRoute')

router.use('/test', TestRoute)
router.use('/auth', AuthRoute)
router.use('/support', SupportRoute)
router.use('/forum', ForumRoute)
router.use('/analysis', AnalysisRoute)
router.use('/grader', GraderRoute)
router.use('/event',EventRoute)
router.use('/udiscount',uDiscountRoute)
router.use('/sendEventMail',sendEventMail)
router.use('/instructor', InstructorRoute)
router.use('/kahoot', KahootRoute)
router.use('/package', PackageRoute)
router.use('/leaderboard', LeaderboardRoute)
router.use('/coin',CoinRoute);
router.use('/chat',ChatRoute)

module.exports = router;
