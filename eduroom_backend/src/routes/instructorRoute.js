const express = require('express')
const router = express.Router()
const {
	Register,
	GetProfile,
	GetCourses,
	GetProfileDetail,
	UpdateProfile,
	Upload,
  GetCategories,
  CreateCourse,
} = require('../controllers/instructorController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { isRegisterInstructor } = require('../middleware/isRegisterInstructor')
const { uploadToGCSHandler } = require('../middleware/multer')

router.post('/register', jwtAuthenicate, Register)
router.post('/upload/evidence',jwtAuthenicate, uploadToGCSHandler('instructor/evidence'),Upload)
router.get('/profile', jwtAuthenicate, isRegisterInstructor, GetProfile)
router.get('/courses', jwtAuthenicate, isInstructor, GetCourses)
router.get('/categories', jwtAuthenicate, isInstructor, GetCategories)
router.get('/profileDetail', jwtAuthenicate, isInstructor, GetProfileDetail)
router.post('/upload/picture', jwtAuthenicate, isInstructor, uploadToGCSHandler('course/picture'), Upload)
router.post('/upload/sampleVideo', jwtAuthenicate, isInstructor, uploadToGCSHandler('course/sampleVideo'), Upload)
router.post('/upload/videos', jwtAuthenicate, isInstructor, uploadToGCSHandler('course/video'), Upload)
router.post('/upload/materials', jwtAuthenicate, isInstructor, uploadToGCSHandler('course/material'), Upload)
router.post('/Editprofile',jwtAuthenicate, isInstructor,UpdateProfile)
router.post('/course', jwtAuthenicate, isInstructor, CreateCourse);

//,uploadToGCSHandler('course/')

module.exports = router
