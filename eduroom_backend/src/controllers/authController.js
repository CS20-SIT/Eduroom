const bcrypt = require('bcryptjs')
const pool = require('../database/db')
const jwt = require('../utils/jwt')
const { generateJWT } = require('../utils/jwt')

exports.getProfile = (req, res) => {
    res.send(req.user)
}

exports.regisController = (req, res) => {
    // Find exist email in db
    const user = req.body
    const password = bcrypt.hashSync(req.body.password)
    const userID = 'userIDfromRegis'

    const token = generateJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.loginController = (req, res) => {
    // Find user and compare password using bcrypt
    const userID = 'userIDfromLogin'
    const token = generateJWT(userID)
    res.cookie('jwt', token)
    res.status(201).send({ success: true })
}

exports.logoutController = (req, res) => {
    res.clearCookie('jwt')
    res.status(200).send({ success: true })
}