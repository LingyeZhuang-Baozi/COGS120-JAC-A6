
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



/*<div>
				<select class = "class-options">
			        <option value = "COGS120">COGS 120</option>
			        <option value = "COGS100">COGS 100</option>
			        <option value = "DSGN100">DSGN 100</option>
			        <option value = "DSGN1">DSGN 1</option>
			        <option value = "CSE87">COGS 87</option>
		      </select>
			</div>*/