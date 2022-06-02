const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AuthorizationError = require('../errors/AutorizationError');
const { errorMessages } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }, { runValidators: true })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthorizationError(errorMessages.loginError));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new AuthorizationError(errorMessages.loginError));
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
