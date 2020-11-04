const express = require('express')
const passport = require('passport')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')
const { getProfile, regisController, loginController, logoutController } = require('../controllers/authController')
const { generateCookieJWT } = require('../utils/jwt')



router.post('/login', loginController)
router.post('/register', regisController)
router.get('/logout', logoutController)

router.get('/google', passport.authenticate('google', { scope: ['profile','email'], session: false }))

router.get('/google/callback', passport.authenticate('google', {session: false}), (req, res) => {
    console.log('Google Authen');
    let user = {
        displayName: req.user.displayName,
        name: req.user.name.givenName,
        email: req.user._json.email,
        provider: req.user.provider }
    console.log(user)
    // Find or add user in db
    const token = generateCookieJWT('userid' + user.name)

    res.cookie('jwt', token)
    res.redirect(process.env.CLIENT_URL)
})

router.get('/profile', jwtAuthenicate , getProfile)

module.exports = router