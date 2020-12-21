const express = require('express')
const { editAdminProfile, editAdminPassword, editAdminProfilePic } = require('../controllers/adminController')
const { jwtAdminAuthenticate } = require('../middleware/jwtAuthenticate')
const { uploadToLocalHandler } = require('../middleware/multer')

const router = express.Router()

router.post('/editAdminProfile', jwtAdminAuthenticate, editAdminProfile)
router.post('/editPassword', jwtAdminAuthenticate, editAdminPassword)
router.post('/editProfilePic', jwtAdminAuthenticate, uploadToLocalHandler(), editAdminProfilePic)

module.exports = router
