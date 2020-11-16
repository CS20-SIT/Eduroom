const express = require('express')
const router = express.Router()

const { getAvailableInstructor, getInstructorList } = require('../controllers/tutor/tutorController')
router.get('/availability', getAvailableInstructor)
router.get('/instructors', getInstructorList)

module.exports = router
