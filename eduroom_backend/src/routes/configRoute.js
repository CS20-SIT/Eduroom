const express = require('express')
const router = express.Router()
const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
router.use('/test',TestRoute)
router.use('/auth',AuthRoute)

module.exports = router