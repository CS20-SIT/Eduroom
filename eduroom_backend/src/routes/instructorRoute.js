const express = require('express')
const router = express.Router()
const {RegisInstructor} = require('../controllers/instructorController')
router.route('/').post(RegisInstructor)
module.exports = router