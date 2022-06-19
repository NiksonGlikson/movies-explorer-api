require('dotenv').config();

const express = require('express');

const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
});

const routes = require('./routes');
const corsa = require('./middlewares/corsa');
const rateLimited = require('./middlewares/rateLimited');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorMessages } = require('./utils/constants');

app.use(corsa);

const CatcherError = require('./errors/CatcherError');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(errorMessages.crashTest);
  }, 0);
});

app.use('/', rateLimited);

routes(app);

app.use(errorLogger);
app.use(errors());
app.use(CatcherError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
