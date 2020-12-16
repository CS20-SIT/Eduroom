const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { uploadToGCSHandler } = require('../middleware/multer')
const {
	getCategories,
	getPackage,
	createPackage,
	getInstructorPackage,
	publishPackage,
	getCourses,
	getNumCourses,
	getCoursesOfCreatingPackage,
	upload,
} = require('../controllers/packageController')

router.get('/categories', getCategories)
router.post('/createPackage', jwtAuthenicate, isInstructor, createPackage)
router.get('/getPackage', getPackage)
router.get('/getCoursesOfCreatingPackage', getCoursesOfCreatingPackage)
router.post('/uploadPackagePic', uploadToGCSHandler('package/picture/'), upload)
router.get('/courses', getCourses)
router.get('/getInstructorPackage', jwtAuthenicate, isInstructor, getInstructorPackage)
router.get('/numCourses', getNumCourses)
router.post('/publishPackage', jwtAuthenicate, isInstructor, publishPackage)

module.exports = router
