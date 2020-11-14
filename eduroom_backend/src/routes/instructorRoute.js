const express = require('express')
const router = express.Router()
const { Register, GetProfile } = require('../controllers/instructorController')
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { isInstructor } = require('../middleware/isInstructor')
const { isRegisterInstructor } = require('../middleware/isRegisterInstructor')

router.post('/register', jwtAuthenicate, Register)
router.get('/profile', jwtAuthenicate, isRegisterInstructor, isInstructor, GetProfile)

module.exports = router
