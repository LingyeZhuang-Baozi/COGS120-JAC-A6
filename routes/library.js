/*
 * GET class library page.
 */
var reading_data = require('../JSON/classlibrary_data.json');
exports.viewReadings = function(req, res){
  console.log (reading_data);  // debug msg
  res.render("library", reading_data);
};