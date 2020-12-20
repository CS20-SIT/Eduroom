const express = require('express')
const router = express.Router()
const { mailCourseSend } = require('../controllers/sentEventMail')
const sendEmail = require('../utils/sendMail')
router.post('/mailCourseSend', mailCourseSend);


module.exports = router