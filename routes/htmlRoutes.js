//requiring packages
const express = require("express"),
  router = express.Router(),
  path = require("path");


//survey route
router.get("/survey", (req, res) => res.sendFile(path.join(__dirname, "../public/survey.html")))

//catch all route that sends the home page
router.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/home.html")))



//exporting for use in app.js
module.exports = router;