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

// GET
// TODO
router.get('/student/appointments', getStudentAppointments)

// DONE
router.get('/instructor/availabilities', getInstructorAvailabilities)
router.get('/instructor/list', getInstructorList)
router.get('/instructor/info', getInstructorInfo)
router.get('/instructor/availability', getInstructorAvailability)
router.get('/instructor/appointments', getInstructorAppointments)
router.get('/instructor/review', getInstructorReview)
router.get('/utils/id', getUserInfo)

// POST
// TODO
// NOT IMPLEMENT YET );

// DONE
router.post('/instructor/availabilities', updateInstructorAvailabilities)

module.exports = router
