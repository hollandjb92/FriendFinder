//requiring packages
const express = require("express"),
  path = require("path");

//set express invocation to a variable
const app = express();
//set port # to a variable
const PORT = process.env.PORT || 3000;

//allows express to handle parsing (body parser outdated)
app.use(express.urlencoded({
  extended: true
}));

//allows serving of static files
app.use(express.static(path.join(__dirname, "public")));

//router
app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

//listen 
app.listen(PORT, console.log(`Server running on Port ${PORT}`));