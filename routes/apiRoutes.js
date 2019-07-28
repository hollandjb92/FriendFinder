const express = require("express"),
  friends = require("../app/data/friends")

router = express.Router();



router.get("/friends", (req, res) => res.json(friends))
router.post("/friends", (req, res) => console.log(res.body));



module.exports = router;