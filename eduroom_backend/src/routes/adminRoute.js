const express = require('express')
const { editAdminProfile, editAdminPassword, editAdminProfilePic, approveCourse, getInReviewCourse, getUnVerifiedInstructor, verifyInstructor } = require('../controllers/adminController')
const { jwtAdminAuthenticate } = require('../middleware/jwtAuthenticate')
const { uploadToLocalHandler } = require('../middleware/multer')

const router = express.Router()

router.post('/editAdminProfile', jwtAdminAuthenticate, editAdminProfile)
router.post('/editPassword', jwtAdminAuthenticate, editAdminPassword)
router.post('/editProfilePic', jwtAdminAuthenticate, uploadToLocalHandler(), editAdminProfilePic)

router.get('/approveCourse', jwtAdminAuthenticate, getInReviewCourse)
router.post('/approveCourse', jwtAdminAuthenticate, approveCourse)

router.get('/verifyInstructor', jwtAdminAuthenticate, getUnVerifiedInstructor)
router.post('/verifyInstructor', jwtAdminAuthenticate, verifyInstructor)


module.exports = router
