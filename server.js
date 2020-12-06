const express = require("express");
require("dotenv").config(); // for loading environment variables
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //You need to use bodyParser() if you want the form data to be available in req.body.
const passport = require("passport"); //They are basically middleware functions that a request runs through before getting to the actual route.
const path = require("path");
const users = require("./routes/api/users"); //Any route request starting with ‘/api/users/’ will be handled by the user router.

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db configuration
const MONGO_URI = process.env.MONGO_URI;
mongoose
   .connect(MONGO_URI, { useNewUrlParser: true })
   .then(() => console.log("Mongo Connection successful"))
   .catch(err => console.log("err"));

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users", users);
app.use("/api/posts/", require("./routes/api/posts"));

if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
