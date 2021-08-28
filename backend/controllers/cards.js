const Card = require('../models/card');

const IncorrectDataError = require('../errors/incorrect-data-err'); // 400
const ForbiddenError = require('../errors/forbidden-err'); // 403
const NotFoundError = require('../errors/not-found-err'); // 404

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectDataError('Переданы некорректные данные при создании карточки.');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным _id не найдена.');
      }
      if (card.owner.toString() !== userId) {
        next(new ForbiddenError('Недостаточно прав для удаления карточки.'));
        return;
      }
      card.deleteOne();
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new IncorrectDataError('Карточка с указанным _id не найдена.');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.setLikeCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Невалидный _id.');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectDataError('Переданы некорректные данные для постановки лайка.');
      } else if (err.name === 'CastError') {
        throw new IncorrectDataError('Карточка с указанным _id не найдена.');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.removeLikeCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: userId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Невалидный _id.');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectDataError('Переданы некорректные данные для снятия лайка.');
      } else if (err.name === 'CastError') {
        throw new IncorrectDataError('Карточка с указанным _id не найдена.');
      } else {
        next(err);
      }
    })
    .catch(next);
};
