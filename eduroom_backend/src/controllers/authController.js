const bcrypt = require('bcryptjs')
const pool = require('../database/db')
const { generateCookieJWT, generateVerifyJWT, verifyVerificationJWT } = require('../utils/jwt')

exports.getProfile = (req, res) => {
    res.send(req.user)
}

exports.regisController = (req, res) => {
    // Find exist email in db
    const user = req.body
    const password = bcrypt.hashSync(req.body.password)
    const userID = 'userIDfromRegis'

    // Create verify token and send verification email
    const verifyToken = Buffer.from(generateVerifyJWT(userID)).toString('base64')
    const verifyUrl = `${process.env.BACKEND_API}/api/auth/verify/${verifyToken}`
    console.log(verifyUrl);

    const token = generateCookieJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.verifyEmailController = (req, res) => {
    const b64Token = req.params.token
    const jwtToken = Buffer.from(b64Token, 'base64').toString()
    // Change user status to verified
    const user = verifyVerificationJWT(jwtToken)
    res.send({validity})
}

exports.loginController = (req, res) => {
    // Find user and compare password using bcrypt
    const userID = 'userIDfromLogin'
    const token = generateCookieJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.logoutController = (req, res) => {
    res.clearCookie('jwt')
    res.status(200).send({ success: true })
}