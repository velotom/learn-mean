const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = module.exports = mongoose.model("User", UserSchema)

module.exports.getUser = function (username, callback) {
    const query = {
        username: username
    }
    user.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(error, salt) {
      bcrypt.hash(newUser.password, salt, function(error, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser.save(callback);
      });
  });  
};
