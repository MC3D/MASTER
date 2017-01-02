const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  // see if given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    
  });
  // return error if email exists

  // create and save user if email does not exists

  // respond indicating user was created
}
