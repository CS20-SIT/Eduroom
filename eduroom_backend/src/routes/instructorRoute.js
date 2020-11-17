const express = require('express')
const router = express.Router()
const { Register, GetProfile, GetCourses } = require('../controllers/instructorController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { isRegisterInstructor } = require('../middleware/isRegisterInstructor')


router.post('/register', jwtAuthenicate, Register)
router.get('/profile', jwtAuthenicate, isRegisterInstructor, GetProfile)
router.get('/courses',jwtAuthenicate,isInstructor,GetCourses);

module.exports = router
