const bcrypt = require('bcryptjs')
const pool = require('../database/db')
const Base64 = require('crypto-js/enc-base64')
const { generateCookieJWT, generateVerifyJWT } = require('../utils/jwt')

exports.getProfile = (req, res) => {
    res.send(req.user)
}

exports.regisController = (req, res) => {
    // Find exist email in db
    const user = req.body
    const password = bcrypt.hashSync(req.body.password)
    const userID = 'userIDfromRegis'

    const verifyToken = Base64.stringify(generateVerifyJWT(userID))
    console.log(verifyToken);

    const token = generateCookieJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
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