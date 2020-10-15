const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const pool = require('../database/db')

const fromCookieCustom = () => (req) => {
  let token
  if (!req.cookies['jwtToken'] || !req.cookies) {
    return null
  }
  if (req && req.cookies && req.cookies['jwtToken'].startsWith('Bearer')) {
    token = req.cookies['jwtToken'].split(' ')[1]
  }
  return token
}

const jwtOptions = {
  jwtFromRequest: fromCookieCustom(),
  secretOrKey: process.env.JWT_SECRET,
}

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
      try {
        return done(null, false)
      } catch (err) {
        return done(err, false)
      }
    })
  )
}
