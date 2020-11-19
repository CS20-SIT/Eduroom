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
} = require('../controllers/user/user')

router.get('/getWishlist', jwtAuthenicate, getWishlist)
router.get('/getMycourse', jwtAuthenicate, getMycourse)
router.delete('/deleteWishlist', jwtAuthenicate, deleteWishlist)

router.get('/getProfile', jwtAuthenicate, getProfile)
router.patch('/postEditProfile', jwtAuthenicate, editProfile)
router.post('/getCheckPassword', jwtAuthenicate, checkPassword)
router.patch('/postNewPassword', jwtAuthenicate, newPassword)

module.exports = router
