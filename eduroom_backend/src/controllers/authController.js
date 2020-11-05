const bcrypt = require('bcryptjs')
const pool = require('../database/db')
const { generateCookieJWT, generateVerifyJWT, verifyVerificationJWT } = require('../utils/jwt')
const sendEmail = require('../utils/sendMail')
const errorHandler = require('../middleware/error')

exports.getProfile = (req, res) => {
    res.send(req.user)
}

exports.regisController = async (req, res) => {
    //TODO: Find exist email in db
    const user = req.body
    const password = bcrypt.hashSync(req.body.password)
    const userID = 'userIDfromRegis'

    // Create verification token and send it in email
    const verifyToken = Buffer.from(generateVerifyJWT(userID)).toString('base64')
    const verifyUrl = `${process.env.BACKEND_API}/api/auth/verify/${verifyToken}`
    const emailOptions = {
        email: user.email,
        subject: 'Eduroom Email Verification',
        message: `Please Verify your email by click at ${verifyUrl}`
    }
    await sendEmail(emailOptions)

    // Generate JWT for user to login
    const token = generateCookieJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.verifyEmailController = async (req, res) => {
    try {
        const b64Token = req.params.token
        const jwtToken = Buffer.from(b64Token, 'base64').toString()
        const user = verifyVerificationJWT(jwtToken)
        // TODO: Change user status to verified and Redirect user to verification success page
        res.redirect(`${process.env.CLIENT_URL}/login`) 
    } catch (error) {
        // TODO: Should redirect to verification error page
        errorHandler(error, req, res)
    }
}

exports.loginController = (req, res) => {
    //TODO: Find user and compare password using bcrypt
    const userID = 'userIDfromLogin'
    const token = generateCookieJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.logoutController = (req, res) => {
    res.clearCookie('jwt')
    res.status(200).send({ success: true })
}