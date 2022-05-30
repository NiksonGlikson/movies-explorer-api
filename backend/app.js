const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const helmet = require('helmet');

const { errors } = require('celebrate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
});

const routes = require('./routes');
const corsa = require('./middlewares/corsa');

const rateLimited = require('./middlewares/rateLimited');

app.use('/', rateLimited);

const { requestLogger, errorLogger } = require('./middlewares/logger');

const CatcherError = require('./errors/CatcherError');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(corsa);

routes(app);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(errorLogger);
app.use(errors());
app.use(CatcherError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
