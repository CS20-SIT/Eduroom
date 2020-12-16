const passport = require("passport");
const { verifyCookieAdminJWT} = require('../utils/jwt')
const ErrorResponse = require("../utils/errorResponse");

const jwtAuthenicate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) {
      res.clearCookie('jwt');
      return next(new ErrorResponse());
    }
    if (!user) {
      res.clearCookie('jwt');
      req.user = null;
    }
    req.user = user;
    return next();
  })(req, res, next);
}

const jwtAdminAuthenticate = (req, res, next) => {
  const token = req.cookies.jwt
  if(!token) return next(new ErrorResponse('Not Authenticate', 401));
  const adminId = verifyCookieAdminJWT(token)
  if(adminId != null){
    req.user = {
      id: adminId
    }
    return next()
  }
  return next(new ErrorResponse('Not Authenticate', 401));
}

module.exports = {
  jwtAuthenicate,
  jwtAdminAuthenticate
}
