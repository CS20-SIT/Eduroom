const JwtStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy

const fromCookieCustom = () => (req) => { // tell passport to read JWT from cookies
  let token = null;
  if (req && req.cookies){
      token = req.cookies.jwt
  }
  return token
}

const jwtOptions = {
  jwtFromRequest: fromCookieCustom(),
  secretOrKey: process.env.JWT_SECRET,
}

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
      try {
        return done(null, jwtPayload)
      } catch (err) {
        return done(err, false)
      }
    })
  )
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: `${process.env.ENTRYPOINT_URL}/api/auth/google/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    // Update/query user in db
      return done(null, profile)
  }))
}
