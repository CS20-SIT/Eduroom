const express = require('express')
const Router = express.Router()

const {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart,
    searchCourse,
} = require('../controllers/courseControllers')

Router.get('/getAllCourse', getAllCourse)

Router.get('/getCourseFromID', getCourseFromID)

Router.get('/getCourseSectionPart', getCourseSectionPart)

Router.post('/search', searchCourse)


module.exports = Router