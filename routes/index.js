/*
 * GET home page.
 */
exports.view = function(req, res){
  res.render("index",{
  	"classname": [
  	{
  		"class": "COGS 120",
  		"id": "class1"
  	},
  	{
  		"class": "COGS 100",
  		"id" : "class2"
  	},
  	{
  		"class": "DSGN 1",
  		"id" : "class3"
  	},
  	{
  		"class": "DSGN 100",
  		"id" : "class4"
  	},
  	{
  		"class": "CSE 87",
  		"id" : "class5"
  	},

  	]
  	});
};