const express = require('express')
const router = express.Router()
const {RegisInstructor} = require('../controllers/instructorController')
router.post('/register_instructor',RegisInstructor)
module.exports = router