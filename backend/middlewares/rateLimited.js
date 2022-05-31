const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  delayMs: 0,
  headers: true,
});

module.exports = rateLimiter;
