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

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', vaidateDeleteMovie, deleteMovie);

module.exports = movieRouter;
