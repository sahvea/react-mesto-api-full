const { celebrate, Joi } = require('celebrate');

const minLength = 2;
const maxLength = 30;
const minPasswordLength = 6;
const idLength = 24;

const validateUserBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(minPasswordLength),
    name: Joi.string().min(minLength).max(maxLength),
    about: Joi.string().min(minLength).max(maxLength),
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().pattern(/https?:\/\/(www\.)?[a-zA-Z\d\-.]{1,}\.[a-z]{1,6}([\/a-z0-9\-._~:?#[\]@!$&'()*+,;=]*)/),
  }),
});

const validateUserEntranceData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(minPasswordLength),
  }),
});

const validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(idLength),
  }),
});

const validateUserUpdateData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(minLength).max(maxLength),
    about: Joi.string().required().min(minLength).max(maxLength),
  }),
});

const validateUserAvatar = celebrate({
  body: Joi.object().keys({
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().required().pattern(/https?:\/\/(www\.)?[a-zA-Z\d\-.]{1,}\.[a-z]{1,6}([\/a-z0-9\-._~:?#[\]@!$&'()*+,;=]*)/),
  }),
});

const validateCardBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(minLength).max(maxLength),
    // eslint-disable-next-line no-useless-escape
    link: Joi.string().required().pattern(/https?:\/\/(www\.)?[a-zA-Z\d\-.]{1,}\.[a-z]{1,6}([\/a-z0-9\-._~:?#[\]@!$&'()*+,;=]*)/),
  }),
});

const validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(idLength),
  }),
});

module.exports = {
  validateUserBody,
  validateUserEntranceData,
  validateUserId,
  validateUserUpdateData,
  validateUserAvatar,
  validateCardBody,
  validateCardId,
};
