const express = require('express')
const Router = express.Router()

const {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart,
    searchCourse,
    getCourse
} = require('../controllers/courseControllers')

Router.get('/getAllCourse', getAllCourse)

Router.post('/getCourseFromID', getCourseFromID)

Router.get('/getCourseSectionPart', getCourseSectionPart)

Router.post('/search', searchCourse)

Router.get('/getCourse', getCourse)


module.exports = Router