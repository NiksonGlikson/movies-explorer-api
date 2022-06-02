const movieRouter = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  validateCreateMovie,
  vaidateDeleteMovie,
} = require('../middlewares/reqValidation');

movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.get('/', getMovies);
movieRouter.delete('/:movieId', vaidateDeleteMovie, deleteMovie);

module.exports = movieRouter;
