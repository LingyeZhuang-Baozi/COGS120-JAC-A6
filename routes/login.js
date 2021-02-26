/*
 * Get login page.
 */
exports.loginPage = function(req, res){
  res.render('login');
};

/*
 * Get registeration page.
 */
exports.registeration = function(req, res){
  res.render('register');
};