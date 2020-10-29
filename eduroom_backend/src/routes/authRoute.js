const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { jwtAuthenicate } = require('../middleware/jwtAuthenticate')

const jwtSecret = process.env.JWT_SECRET
const jwtSignOption = {
    algorithm: 'HS256',
    expiresIn: process.env.JWT_EXPIRE
}

router.get('/login', (req,res,next)=>{
    res.status(200).json({success:ture})
})
router.get('/register', (req,res,next)=>{
    res.status(200).json({success:ture})
})

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
    const token = jwt.sign({
        user: 'userid' + user.name
    }, jwtSecret, jwtSignOption)

    res.cookie('jwt', token)
    res.redirect(process.env.CLIENT_URL)
})

router.get('/profile', jwtAuthenicate ,(req,res)=>{
    res.send(`Wellcome user ${JSON.stringify(req.user)}`)
})

module.exports = router