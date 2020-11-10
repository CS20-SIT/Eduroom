const bcrypt = require('bcryptjs')
const pool = require('../database/db')
const crypto = require('crypto')
const { generateCookieJWT, generateVerifyJWT, verifyVerificationJWT } = require('../utils/jwt')
const sendEmail = require('../utils/sendMail')
const errorHandler = require('../middleware/error')

exports.getProfile = (req, res) => {
    res.send(req.user)
}

exports.regisController = async (req, res) => {
    try {
        // {
        //     email: <String>
        //     password: <String>
        //     firstname: <String>
        //     lastname: <String>
        //     birthdate: <String>
        //     initial: <String>
        //     phoneNo: <String>
        //     displayname: <String>
        //     bio: <String>
        //     isStudent: <Boolean>
        // }
        const user = req.body
        // Find existing user in db
        const existingUser = await pool.query(`SELECT email FROM local_auth WHERE email = '${user.email}'`)
        if(existingUser.rowCount != 0){
            const err = {
                statusCode: 400,
                message: 'Email is used'
            }
            return errorHandler(err, req, res)
        }
        // Insert new user_profile
        user.password = bcrypt.hashSync(user.password)
        const user_profileCreationQuery = `INSERT INTO user_profile (userid, firstname, lastname, birthdate, initial, phoneno, displayname, bio, avatar, isstudent, createat, updateat) 
        VALUES (uuid_generate_v4(), '${user.firstname}', '${user.lastname}', '${user.birthdate}', '${user.initial}', '${user.phoneNo}', '${user.displayname}', '${user.bio}', './png.png', ${user.isStudent}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`
        await pool.query(user_profileCreationQuery)
        // Get userId from user_profile
        const user_profile = await pool.query(`SELECT userid FROM user_profile WHERE firstname = '${user.firstname}' AND lastname = '${user.lastname}'`)
        if(user_profile.rowCount == 0){
            const err = {
                statusCode: 500,
                message: 'user is not found after saved'
            }
            return errorHandler(err, req, res)
        }
        const userId = user_profile.rows[0].userid
        // Create local_auth
        const local_authCreationQuery = `INSERT INTO local_auth (userid, email, password) 
                                        VALUES ('${userId}', '${user.email}', '${user.password}')`
        await pool.query(local_authCreationQuery)
        // Create verification token and send it in email

        const verifyToken = crypto.randomBytes(20).toString('hex')
        const user_verificationCreationQuery = `INSERT INTO user_verification (userid, starttime, endtime, token, isverified)
        VALUES ('${userId}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + (120 * interval '1 minute'), '${verifyToken}', false)`
        await pool.query(user_verificationCreationQuery)

        const verifyUrl = `${process.env.ENTRYPOINT_URL}/api/auth/verify/${verifyToken}`
        const emailOptions = {
            email: user.email,
            subject: 'Eduroom Email Verification',
            htmlMessage: `Please Verify your email by click <a href="${verifyUrl}">here</a>.`
        }
        await sendEmail(emailOptions)

        // Generate JWT for user to login
        const token = generateCookieJWT(userId)
        res.cookie('jwt', token)
        res.status(201).send({ success: true })
    } catch (error) {
        errorHandler(error, req, res)
    }
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

exports.loginController = async (req, res) => {
    try{
        //TODO: Find user and compare password using bcrypt
        const userID = 'userIDfromLogin'
        const token = generateCookieJWT(userID)
        res.cookie('jwt', token)
        res.status(201).send({ success: true })
    } catch (error) {
        // TODO: Should redirect to verification error page
        errorHandler(error, req, res)
    }
}

exports.logoutController = (req, res) => {
    res.clearCookie('jwt')
    res.status(200).send({ success: true })
}