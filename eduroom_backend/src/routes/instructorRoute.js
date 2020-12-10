const express = require('express')
const router = express.Router()
const {
	Register,
	GetProfile,
	GetCourses,
	GetProfileDetail,
	Upload,
  GetCategories,
  CreateCourse
} = require('../controllers/instructorController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { isRegisterInstructor } = require('../middleware/isRegisterInstructor')
const { uploadToGCSHandler } = require('../middleware/multer')

router.post('/register', jwtAuthenicate, Register)
router.get('/profile', jwtAuthenicate, isRegisterInstructor, GetProfile)
router.get('/courses', jwtAuthenicate, isInstructor, GetCourses)
router.get('/categories', jwtAuthenicate, isInstructor, GetCategories)
router.get('/profileDetail', jwtAuthenicate, isInstructor, GetProfileDetail)
router.post('/upload', jwtAuthenicate, isInstructor, uploadToGCSHandler('test-course1/'), Upload)
router.post('/course', jwtAuthenicate, isInstructor, CreateCourse);

//,uploadToGCSHandler('course/')

module.exports = router
