const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/AutorizationError');
const { errorMessages } = require('../utils/constants');

const { JWT_SECRET_KEY = 'dev' } = process.env;

module.exports = (req, res, next) => {
  const cookieAuthorization = req.cookies.jwt;
  if (!cookieAuthorization) {
    return next(new AuthorizationError(errorMessages.authorizationError));
  }
  let payload;
  try {
    payload = jwt.verify(cookieAuthorization, JWT_SECRET_KEY);
  } catch (err) {
    return next(new AuthorizationError(errorMessages.authorizationError));
  }
  req.user = payload;
  return next();
};
