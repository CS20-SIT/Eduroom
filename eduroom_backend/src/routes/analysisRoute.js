const express = require('express')
const Router = express.Router()

const {
    getNumberOfCourse
} = require('../controllers/analysisControllers')

Router.get('/getNumberOfCourse', getNumberOfCourse)

module.exports = Router