const express = require('express')
const router = express.Router()

// middleware
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

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
router.get('/instructor/availabilities', jwtAuthenicate, getInstructorAvailabilities)
router.get('/instructor/list', jwtAuthenicate, getInstructorList)
router.get('/instructor/info', jwtAuthenicate, getInstructorInfo)
router.get('/instructor/availability', jwtAuthenicate, getInstructorAvailability)
router.get('/instructor/appointments', jwtAuthenicate, getInstructorAppointments)
router.get('/instructor/review', jwtAuthenicate, getInstructorReview)
router.get('/student/appointments', jwtAuthenicate, getStudentAppointments)
router.get('/utils/id', jwtAuthenicate, getUserInfo)

// POST
// TODO

// DONE
router.post('/instructor/appointments', jwtAuthenicate, updateInstructorAppointment)
router.post('/student/appointments', jwtAuthenicate, insertStudentAppointment)
router.post('/instructor/availabilities', jwtAuthenicate, updateInstructorAvailabilities)
router.post('/appointment/review', jwtAuthenicate, updateAppointmentReview)

module.exports = router
