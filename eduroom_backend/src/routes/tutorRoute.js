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
	updateInstructorAvailabilities,
} = require('../controllers/tutor/tutorController')

router.get('/instructor/availabilities', getInstructorAvailabilities)
// DONE
router.get('/instructor/list', getInstructorList)
// DONE
router.get('/instructor/info', getInstructorInfo)
// DONE
router.get('/instructor/availability', getInstructorAvailability)
router.get('/instructor/appointments', getInstructorAppointments)
router.get('/instructor/review', getInstructorReview)
router.get('/student/appointments', getStudentAppointments)
router.get('/utils/id', getUserInfo)

router.post('/instructor/availabilities', updateInstructorAvailabilities)

module.exports = router
