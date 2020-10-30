const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET
const jwtSignOption = {
    algorithm: 'HS256',
    expiresIn: '30d'
}

const generateJWT = (payload) => {
    console.log(payload);
    return jwt.sign({ user: payload }, jwtSecret, jwtSignOption)
}

module.exports = {
    generateJWT
}