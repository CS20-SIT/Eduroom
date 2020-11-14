const express = require('express')
const router = express.Router()

const{getAvailableInstructor} = require('../controllers/tutor/tutorController')
router.get('/availability', getAvailableInstructor)

module.exports = router