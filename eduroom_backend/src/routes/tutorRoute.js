const express = require('express')
const router = express.Router()

const {
	getAvailableInstructor,
	getInstructorList,
	getInstructorInfo,
	getStudentAppointments,
} = require('../controllers/tutor/tutorController')
router.get('/availability', getAvailableInstructor)
router.get('/instructors', getInstructorList)
router.get('/instructor/info', getInstructorInfo)
router.get('/student/appointments', getStudentAppointments)

module.exports = router
