//require express and friends.js
const express = require("express"),
  friends = require("../app/data/friends.js");

//requiring Router middleware
router = express.Router();

//friends route sends json of friends array
router.get("/friends", (req, res) => res.json(friends))

//post method to friends route
router.post("/friends", (req, res) => {
  // console.log(friends)
  //store request body in variable
  const userInput = req.body;
  //store the user scores in a variable
  const userScores = userInput.scores

  //declare match variables
  let matchName = "";
  let matchImage = "";
  //total for friend finder logic
  let total = 1000;

  //loop through all friends
  for (i = 0; i < friends.length; i++) {

    let difference = 0;
    //find the difference for each question between user and potential friend
    for (j = 0; j < userScores.length; j++) {
      //and store it in difference
      difference += Math.abs(friends[i].scores[j] - userScores[j])
    }
    //if difference is lower than current difference, make that friend the new match
    if (difference < total) {
      total = difference
      matchName = friends[i].name;
      matchImage = friends[i].photo;
    }
  }

  //push user to friends array
  friends.push(userInput);
  //send match info 
  res.json({
    matchName,
    matchImage
  })

});


//exports for use in app.js
module.exports = router;