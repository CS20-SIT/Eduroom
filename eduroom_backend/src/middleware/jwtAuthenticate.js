const passport = require("passport");
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

module.exports = {
  jwtAuthenicate
}
