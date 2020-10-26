const express = require('express')
const router = express.Router()
const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const ForumRoute = require('./forumRoute')
router.use('/test',TestRoute)
router.use('/auth',AuthRoute)
router.use('/forum',ForumRoute)

module.exports = router