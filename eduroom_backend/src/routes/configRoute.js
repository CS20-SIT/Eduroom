const express = require('express')
const router = express.Router()
const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const EventRoute = require('./eventRoute')
router.use('/test',TestRoute)
router.use('/auth',AuthRoute)
router.use('/event',EventRoute)

module.exports = router