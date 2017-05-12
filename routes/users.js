const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/register", function (request, response, next) {
    let newUser = new User({
        name: request.body.name,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password
    });

    User.addUser(newUser, function(err, user){
       if(err) {
            response.json({ success: false, message: "Failed to register user" });
       } else {
           response.json({ success: true, message: "User registered"});
       }       
    });
});

router.post("/authenticate", function (request, response, next) {
    response.send("AUTHENTICATE");
});

router.get("/profile", function (request, response, next) {
    response.send("PROFILE");
});

module.exports = router;
