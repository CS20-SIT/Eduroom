const express = require('express')
const Router = express.Router()

const {
    getAmountOfCourse,
    getAmountOfSpecificCourse
} = require('../controllers/analysisControllers')

Router.get('/getAmountOfSpecificCourse', getAmountOfSpecificCourse)

module.exports = Router