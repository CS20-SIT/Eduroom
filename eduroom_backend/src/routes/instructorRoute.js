const express = require('express')
const router = express.Router()
const { Register, GetProfile, GetCourses, GetProfileDetail, Upload, GetCategories } = require('../controllers/instructorController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { isRegisterInstructor } = require('../middleware/isRegisterInstructor')
const { uploadFile } = require('../utils/cloudStorage');

router.post('/register', jwtAuthenicate, Register)
router.get('/profile', jwtAuthenicate, isRegisterInstructor, GetProfile)
router.get('/courses', jwtAuthenicate, isInstructor, GetCourses)
router.get('/categories',jwtAuthenicate,isInstructor,GetCategories);
router.get('/profileDetail', jwtAuthenicate, isInstructor, GetProfileDetail)
router.post('/upload',jwtAuthenicate,isInstructor,uploadFile,Upload);

module.exports = router
