const express = require('express')
const router = express.Router()

const TestRoute = require('./testRoute')
const AuthRoute = require('./authRoute')
const AnalysisRoute = require('./analysisRoute')

router.use('/test',TestRoute)
router.use('/auth',AuthRoute)
router.use('/analysis', AnalysisRoute)

module.exports = router