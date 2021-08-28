const jwt = require('jsonwebtoken');

const AuthorizationError = require('../errors/authorization-err'); // 401

const { JWT_SECRET = 'secret-key' } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthorizationError('Необходима авторизация'));
  }

  req.user = payload;

  next();
};
