const express = require("express"),
  friends = require("../app/data/friends.js");


router = express.Router();



router.get("/friends", (req, res) => res.json(friends))


router.post("/friends", (req, res) => {
  console.log(friends)
  const userInput = req.body;
  const userScores = userInput.scores


  let matchName = "";
  let matchImage = "";
  let total = 1000;

  for (i = 0; i < friends.length; i++) {
    let difference = 0;
    for (j = 0; j < userScores.length; j++) {

      difference += Math.abs(friends[i].scores[j] - userScores[j])
    }

    if (difference < total) {
      total = difference
      matchName = friends[i].name;
      matchImage = friends[i].photo;
    }
  }

  friends.push(userInput);
  res.json({
    status: 200,
    matchName,
    matchImage
  })

});



module.exports = router;