const express = require('express')
const router = express.Router()
const {registerUemail} = require('../controllers/UniversityDiscount/registerUemail')


router.post('/registerUemail',registerUemail);

module.exports = router