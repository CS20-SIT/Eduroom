const express = require('express')
const Router = express.Router()

const {
    getAmountOfCourse,
    getAmountOfSpecificCourse,
    getSoldOutCourse
    
} = require('../controllers/analysisControllers')

Router.get('/getAmountOfSpecificCourse', getAmountOfSpecificCourse)
Router.get('/soldOutCourse' , getSoldOutCourse)
module.exports = Router