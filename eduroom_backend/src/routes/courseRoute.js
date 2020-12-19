const express = require('express')
const Router = express.Router()

const {
	getAllCourse,
	getCourseFromID,
	getCourseSectionPart,
	searchCourse,
} = require('../controllers/courseControllers')

const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
Router.get('/getAllCourse', getAllCourse)
Router.get('/getCourseFromID', jwtAuthenicate, getCourseFromID)
Router.get('/getCourseSectionPart', getCourseSectionPart)
Router.post('/search', searchCourse)

module.exports = Router
