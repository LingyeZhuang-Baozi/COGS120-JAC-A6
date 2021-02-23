/*
 * GET home page.
 */
exports.viewReadings = function(req,res){
  res.render("library");
}
exports.viewReadings = function(req, res){
  res.render("library",{
    "readings": [
    {
      "title": "Participant Observation",
      "number": "Reading 1"
    },
    {
      "title": "Interviewing",
      "number": "Reading 2"
    },
    {
      "title": "NeedFinding Strategies",
      "number": "Reading 3"
    },
    {
      "title" : "Paper Prototypes and Mockups",
      "number": "Reading 4"
    },
    {
      "title": "Wizard of Oz",
      "number": "Reading 5"
    },
    {
      "title": "Heuristics Understanding",
      "number": "Reading 6"
    },
    {
      "title": "Heuristics Evaluation",
      "number": "Reading 7"
    },
    {
      "title": "Video Prototyping",
      "number": "Reading 8"
    }
    ]
  });
};