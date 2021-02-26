
/*
* Viewing docs
*
*/
exports.viewWords = function(req,res){
  res.render("read");
}

/*
* trying ti see if this stored the selected text
*/
function selectedText(){
	var select = window.getSelection().toString();
}
function initializePage(){
	console.log("text selected");
	selectedText();
}