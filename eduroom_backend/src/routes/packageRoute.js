const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')

const { getPackage, createPackage, getInstructorPackage } = require('../controllers/packageController')

router.post('/createPackage', createPackage)
router.get('/getPackage', getPackage)
router.get('/getInstructorPackage',jwtAuthenicate,isInstructor,getInstructorPackage)

module.exports = router
