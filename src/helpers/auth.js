const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "No tiene Autorización. Debe loguearse");
  res.redirect("/users/signin");
};

module.exports = helpers;