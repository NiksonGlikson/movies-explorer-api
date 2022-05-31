const movieRouter = require('express').Router();

const {
  validateCreateMovie,
  vaidateDeleteMovie,
} = require('../middlewares/reqValidation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', vaidateDeleteMovie, deleteMovie);

module.exports = movieRouter;
