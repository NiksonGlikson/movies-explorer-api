const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  delayMs: 0,
  messages: 'Вы сделали слишком много запросов за 15 минут',
  headers: true,
});

module.exports = rateLimiter;
