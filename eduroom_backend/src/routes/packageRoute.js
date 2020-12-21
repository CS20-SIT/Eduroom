const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { uploadToGCSHandler } = require('../middleware/multer')
const {
	getCategories,
	getPackage,
	getCountCourseInPackage,
	getCountCourseInstructor,
	getCourseInPackage,
	getAllPackage,
	getCourseFromIds,
	getPackagesFromIds,
	createPackage,
	getInstructorPackage,
	publishPackage,
	getCourses,
	getNumCourses,
	getCoursesOfCreatingPackage,
	upload,
	deletePackage,
} = require('../controllers/packageController')

router.get('/categories', getCategories)
router.post('/createPackage', jwtAuthenicate, isInstructor, createPackage)
router.post('/delete/package', jwtAuthenicate, isInstructor, deletePackage)
router.get('/getPackage', getPackage)
router.get('/getAllPackage',getAllPackage)
router.get('/getCoursesOfCreatingPackage', getCoursesOfCreatingPackage)
router.post('/uploadPackagePic', uploadToGCSHandler('package/picture/'), upload)
router.get('/courses', getCourses)
router.get('/coursesFromIds', getCourseFromIds)
router.get('/packagesFromIds', getPackagesFromIds)
router.get('/getInstructorPackage', jwtAuthenicate, isInstructor, getInstructorPackage)
router.get('/numCourses', getNumCourses)
router.post('/publishPackage', jwtAuthenicate, isInstructor, publishPackage)


module.exports = router
