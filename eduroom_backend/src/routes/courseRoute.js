const express = require('express')
const Router = express.Router()

const {
    getAllCourse
} = require('../controllers/courseControllers')

Router.get('/getAllCourse', getAllCourse)


module.exports = Router