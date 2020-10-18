const passport = require("passport");
const ErrorResponse = require("../utils/errorResponse");

module.exports = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) {
      res.clearCookie('logged_in');
      return next(new ErrorResponse());
    }
    if (!user) {
      res.clearCookie('logged_in');
      return next(new ErrorResponse("Unauthorized", 401));
    }
    req.user = user;
    return next();
  })(req, res, next);
};
