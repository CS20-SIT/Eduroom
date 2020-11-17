const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET
const jwtCookieSignOption = {
	algorithm: 'HS256',
	expiresIn: '30d',
}

const jwtVerifySignOption = {
	algorithm: 'HS256',
	expiresIn: '1d',
}

const generateCookieJWT = (payload) => {
	return jwt.sign({ id: payload }, jwtSecret, jwtCookieSignOption)
}

const generateVerifyJWT = (payload) => {
	return jwt.sign({ id: payload }, jwtSecret, jwtVerifySignOption)
}

const verifyVerificationJWT = (token) => {
	return jwt.verify(token, jwtSecret, jwtVerifySignOption)
}

module.exports = {
	generateCookieJWT,
	generateVerifyJWT,
	verifyVerificationJWT,
}
