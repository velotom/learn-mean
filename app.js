const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/config");

mongoose.connect(config.database);

mongoose.connection.on("connected", function() {
   console.log("Connected to database " + config.database) 
});

mongoose.connection.on("error", function(err) {
   console.log("Database error" + err) 
});

const app = express();

const port = 3000;

const users = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(bodyParser.json());

app.use("/users", users);

app.get("/", function(req, res) {
    res.send("Invalid Endpoint");
});

app.listen(port, function() {
    console.log("Server started on port " + port);    
});