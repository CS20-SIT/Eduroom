const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')

const { getPackage, createPackage, getInstructorPackage,publishPackage } = require('../controllers/packageController')

router.post('/createPackage', createPackage)
router.get('/getPackage', getPackage)
router.get('/getInstructorPackage', jwtAuthenicate, isInstructor, getInstructorPackage)
router.post('/publishPackage',jwtAuthenicate,isInstructor,publishPackage);

module.exports = router
