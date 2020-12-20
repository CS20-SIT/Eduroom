const express = require('express')
const { editProfile } = require('../controllers/adminController')
const router = express.Router()

router.post('/profile', editProfile)

module.exports = router
