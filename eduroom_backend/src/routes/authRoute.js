const express = require('express')
const passport = require('passport')

const router = express.Router()
const { jwtAuthenicate, jwtAdminAuthenticate } = require('../middleware/jwtAuthenticate')
const {
	getProfile,
	regisController,
	loginController,
	logoutController,
	verifyEmailController,
	googleCallbackController,
	adminRegisController,
	adminLoginController,
	adminProfileController
} = require('../controllers/authController')

router.post('/login', loginController)
router.post('/register', regisController)
router.get('/verify/:token', verifyEmailController)
router.get('/logout', jwtAuthenicate, logoutController)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }))

router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallbackController)

router.get('/profile', jwtAuthenicate, getProfile)

router.post('/admin/regis', adminRegisController)
router.post('/admin/login', adminLoginController)
router.get('/admin/profile', jwtAdminAuthenticate, adminProfileController)

module.exports = router
