
/*
 * Get upload page.
 */
var class_data = require('../JSON/class_data.json');
exports.view = function(req, res){
  res.render('upload', class_data);
};

exports.url = function(req, res){
  res.render('upload_url', class_data);
};

exports.scan = function(req, res){
  res.render('upload_scan', class_data);
};

exports.file = function(req, res){
  res.render('upload_file', class_data);
};

exports.success = function(req, res){
  res.render('upload_success', class_data);
};
