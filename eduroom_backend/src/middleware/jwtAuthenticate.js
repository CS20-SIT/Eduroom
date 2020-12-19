const passport = require("passport");
const ErrorResponse = require("../utils/errorResponse");

const jwtAuthenicate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user || user.role !== 'user') {
      // res.clearCookie('jwt');
      return next(new ErrorResponse("Unauthorize",401))
    }
    req.user = user;
    return next();
  })(req, res, next);
}

const jwtByPassAuthenicate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user || user.role !== 'user') {
      // res.clearCookie('jwt');
      req.user = null;
      return next();
    }
    req.user = user;
    return next();
  })(req, res, next);
}

const jwtAdminAuthenticate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user || user.role !== 'admin') {
      // res.clearCookie('jwt');
      return next(new ErrorResponse('Not Authenticate', 401));
    }
    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = {
  jwtAuthenicate,
  jwtAdminAuthenticate,
  jwtByPassAuthenicate
}
