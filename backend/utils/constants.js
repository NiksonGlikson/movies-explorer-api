const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'http://localhost:3000',
  'https://localhost:3000',
  'https://127.0.0.1:3000',
  'http://127.0.0.1:3000',
  'https://movies.explorer.glinkin.nomoredomains.xyz',
  'http://movies.explorer.glinkin.nomoredomains.xyz',
  'https://movie.explorer.glinkin.nomoredomains.sbs',
  'http://movie.explorer.glinkin.nomoredomains.sbs',
];

const errorMessages = {
  urlError: 'Не является URL адресом',
  dataError: 'Переданы некорректные данные',
  movieNotFoundError: 'Фильм не найден',
  movieDeleteError: 'Вы не можете удалить этот фильм',
  userNotFoundError: 'Указанный пользователь не найден',
  emailError: 'Пользователь с таким EMAIL уже зарегистрирован',
  authorizationError: 'Ошибка авторизации',
  loginError: 'Неправильные почта или пароль',
  wrongPathError: 'По указанному пути ничего нет',
  crashTest: 'Сервет сейчас упадет',
};

module.exports = { allowedCors, errorMessages };
