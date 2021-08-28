const router = require('express').Router();

const {
  getCards, createCard, deleteCard, setLikeCard, removeLikeCard,
} = require('../controllers/cards');
const { validateCardBody, validateCardId } = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', validateCardBody, createCard);
router.put('/:cardId/likes', validateCardId, setLikeCard);
router.delete('/:cardId/likes', validateCardId, removeLikeCard);
router.delete('/:cardId', validateCardId, deleteCard);

module.exports = router;
