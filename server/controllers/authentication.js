const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  // see if given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // return error if email exists
    const user = new User({
      email: email,
      password: password
    });

    user.save();

    // create and save user if email does not exists


  });


  // respond indicating user was created
}
