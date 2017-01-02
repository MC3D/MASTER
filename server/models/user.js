const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// encrypt password On Save Hook
// run this function before saving a model
userSchema.pre('save', function(next){
  // get access to user model
  const user = this;

  // generate a salt, then run callback
  bcrypt.genSalt(10, function(err, salt){
    if (err) {return next(err); }

    // hash password using salt
    bcrypt.hash(user.passoword, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      // go ahead and save the model
      next();
    });
  });
});

// Create the model class; represents all users
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass
