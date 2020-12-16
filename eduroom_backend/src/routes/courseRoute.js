const express = require('express')
const Router = express.Router()

const {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart,
} = require('../controllers/courseControllers')

Router.get('/getAllCourse', getAllCourse)

Router.post('/getCourseFromID', getCourseFromID)

Router.get('/getCourseSectionPart', getCourseSectionPart)


module.exports = Router