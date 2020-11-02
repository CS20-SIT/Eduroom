const JwtStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const pool = require('../database/db')

const fromCookieCustom = () => (req) => { // tell passport to read JWT from cookies
  var token = null;
  if (req && req.cookies){
      token = req.cookies['jwt']
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
        return done(null, jwt_payload)
      } catch (err) {
        return done(err, false)
      }
    })
  )
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: process.env.BACKEND_API + '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Update/query user in db
      console.log(JSON.stringify(profile))
      return done(null, profile)
  }))
}
