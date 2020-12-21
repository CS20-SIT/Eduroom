const express = require('express')
const Router = express.Router()

const {
	getAllCourse,
	getCourseFromID,
	getCourseSectionPart,
	searchCourse,
	getCourse,
	getCategory,
	searchCategory,
	addCourseToWishlist,
	removeCourseFromWishlist
} = require('../controllers/courseControllers')

const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

Router.get('/getAllCourse', getAllCourse)

Router.get('/getCourseFromID', jwtAuthenicate, getCourseFromID)

Router.get('/getCourseSectionPart', getCourseSectionPart)

Router.post('/search', searchCourse)

Router.get('/getCourse', getCourse)

Router.get('/category', getCategory)

Router.get('/categorySearch/:cataname', searchCategory)

Router.post('/addCourseToWishlist', jwtAuthenicate, addCourseToWishlist)

Router.post('/removeCourseFromWishlist', jwtAuthenicate, removeCourseFromWishlist)

module.exports = Router
