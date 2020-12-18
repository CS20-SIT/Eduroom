const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET
const jwtCookieSignOption = {
	algorithm: 'HS256',
	expiresIn: '30d',
}

const generateCookieJWT = (payload) => {
	return jwt.sign({ id: payload, role: 'user' }, jwtSecret, jwtCookieSignOption)
}

const generateCookieAdminJWT = (payload) => {
	return jwt.sign({ id: payload, role: 'admin' }, jwtSecret, jwtCookieSignOption)
}

module.exports = {
	generateCookieJWT,
	generateCookieAdminJWT
}
