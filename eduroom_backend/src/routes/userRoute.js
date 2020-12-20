const express = require('express')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const {
	getWishlist,
	getMycourse,
	deleteWishlist,
	getProfile,
	editProfile,
	checkPassword,
	newPassword,
	getCertificate
} = require('../controllers/user/user')

router.get('/getWishlist', jwtAuthenicate, getWishlist)
router.get('/getMycourse', jwtAuthenicate, getMycourse)
router.post('/deleteWishlist', jwtAuthenicate, deleteWishlist)

router.get('/getProfile', jwtAuthenicate, getProfile)
router.patch('/postEditProfile', jwtAuthenicate, editProfile)
router.post('/getCheckPassword', jwtAuthenicate, checkPassword)
router.patch('/postNewPassword', jwtAuthenicate, newPassword)
router.get('/certificate', jwtAuthenicate, getCertificate)
module.exports = router
