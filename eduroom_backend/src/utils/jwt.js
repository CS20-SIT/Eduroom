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
	return jwt.sign({ id: payload, role: 'admin' }, jwtSecret, jwtCookieSignOption)
}

const generateVerifyJWT = (payload) => {
	return jwt.sign({ id: payload }, jwtSecret, jwtVerifySignOption)
}

const generateCookieAdminJWT = (payload) => {
	return jwt.sign({ id: payload, role: 'admin' }, jwtSecret, jwtCookieSignOption)
}

const verifyVerificationJWT = (token) => {
	return jwt.verify(token, jwtSecret, jwtVerifySignOption)
}

const verifyCookieAdminJWT = (token) => {
	const verification = jwt.verify(token, jwtSecret, jwtVerifySignOption)
	if(verification.role === 'admin'){
		return verification.id
	}
	return null
}

module.exports = {
	generateCookieJWT,
	generateVerifyJWT,
	verifyVerificationJWT,
	generateCookieAdminJWT,
	verifyCookieAdminJWT
}
