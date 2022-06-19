const userRouter = require('express').Router();

const {
  updateUser,
  getMe,
} = require('../controllers/users');

const { patchProfileValidityCheck } = require('../middlewares/reqValidation');

userRouter.get('/me', getMe);

userRouter.patch('/me', patchProfileValidityCheck, updateUser);

module.exports = userRouter;
