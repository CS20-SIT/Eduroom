const express = require('express')
const router = express.Router()
const { RegisInstructor, Test } = require('../controllers/instructorController')

router.post('/register_instructor', RegisInstructor)
router.get('/test', Test)

module.exports = router