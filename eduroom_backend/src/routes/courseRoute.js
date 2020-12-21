const express = require('express')
const Router = express.Router()

const {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart,
    searchCourse,
} = require('../controllers/courseControllers')

Router.get('/getAllCourse', getAllCourse)

Router.post('/getCourseFromID', getCourseFromID)

Router.post('/getCourseSectionPart', getCourseSectionPart)

Router.post('/search', searchCourse)


module.exports = Router