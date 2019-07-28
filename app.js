const bodyParser = require("body-parser");
express = require("express"),
  path = require("path");


const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));



app.listen(PORT, console.log(`Server running on Port ${PORT}`));