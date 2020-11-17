const express = require('express')
const router = express.Router()

// middleware
// const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

const {
	getInstructorAvailabilities,
	getInstructorList,
	getInstructorInfo,
	getInstructorAppointments,
	getInstructorReview,
	getStudentAppointments,
	getInstructorAvailability,
	getUserInfo,
} = require('../controllers/tutor/tutorController')

router.get('/instructor/availabilities', getInstructorAvailabilities)
router.get('/instructor/list', getInstructorList)
router.get('/instructor/info', getInstructorInfo)
router.get('/instructor/availability', getInstructorAvailability)
router.get('/instructor/appointments', getInstructorAppointments)
router.get('/instructor/review', getInstructorReview)
router.get('/student/appointments', getStudentAppointments)
router.get('/utils/id', getUserInfo)

module.exports = router
