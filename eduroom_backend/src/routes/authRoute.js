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
	adminProfileController,
	resendVerify
} = require('../controllers/authController')

router.post('/login', loginController)
router.post('/register', regisController)
router.get('/verify/:token', verifyEmailController)
router.post('/verify/resend',jwtAuthenicate,resendVerify)
router.get('/logout', jwtAuthenicate, logoutController)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }))

router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallbackController)

router.get('/profile', jwtAuthenicate, getProfile)

router.post('/admin/register', adminRegisController)
router.post('/admin/login', adminLoginController)
router.get('/admin/profile', jwtAdminAuthenticate, adminProfileController)
router.get('/admin/logout', jwtAdminAuthenticate, logoutController)

module.exports = router
