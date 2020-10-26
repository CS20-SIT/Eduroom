const express = require('express')
const router = express.Router()
const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const SupportRoute = require('./supportRoute')
router.use('/test',TestRoute)
router.use('/auth',AuthRoute)
router.use('/support', SupportRoute)
module.exports = router