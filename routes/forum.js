
/*
 * Get forum page.
 */
exports.view = function(req, res){
  res.render('forum', {
  	'questions': [
  		{	'title': "What is the function of css?",
  			'class': "COGS120",
  			'op': "😊me"
  		},
  		{
  			'title': "What is the affordance of a door?",
  			'class': "DSGN 1",
  			'op': "🎀oof"
  		},
  		{
  			'title': "What is the function of css?",
  			'class': "COGS 10",
  			'op': "🐟bob"
  		},
  		{
  			'title': "Can you list some examples of distri...",
  			'class': "COGS 100",
  			'op': "😊me"
  		}
  	]
  });
};

/*
 * Get forum → ask question page.
 */
exports.question = function(req, res){
  res.render('forum_question');
};