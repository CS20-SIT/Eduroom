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
	insertStudentAppointment,
	updateInstructorAppointment,
	updateAppointmentReview,
} = require('../controllers/tutor/tutorController')

// GET
// TODO

// DONE
router.get('/instructor/availabilities', getInstructorAvailabilities)
router.get('/instructor/list', getInstructorList)
router.get('/instructor/info', getInstructorInfo)
router.get('/instructor/availability', getInstructorAvailability)
router.get('/instructor/appointments', getInstructorAppointments)
router.get('/instructor/review', getInstructorReview)
router.get('/student/appointments', getStudentAppointments)
router.get('/utils/id', getUserInfo)

// POST
// TODO

// DONE
router.post('/instructor/appointments', updateInstructorAppointment)
router.post('/student/appointments', insertStudentAppointment)
router.post('/instructor/availabilities', updateInstructorAvailabilities)
router.post('/appointment/review', updateAppointmentReview)

module.exports = router
