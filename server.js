const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/posts");
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("Mongodb Connect"))
  .catch(err => console.log(err));

//Passport Config
// require("./config/passport")(passport);
require("./config/passport");

// Use Routes
app.use("/api/users", users);

//Server static assests if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running ${port}`));
