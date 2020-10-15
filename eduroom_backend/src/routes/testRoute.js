const express = require('express')
const router = express.Router()
const { test } = require('../controllers/test')

router.get('/api/test', test)

module.exports = router