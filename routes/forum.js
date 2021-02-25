/*
 * Get forum page.
 */
var forum_data = require('../JSON/forum_data.json');
exports.view = function(req, res){
  console.log (forum_data);  // debug msg
  res.render('forum', forum_data);
};

/*
 * Get forum → ask question page.
 */
exports.question = function(req, res){
  res.render('forum_question');
};