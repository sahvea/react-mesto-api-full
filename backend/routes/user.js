const router = require('express').Router();

const {
  getUsers, getUserById, getCurrentUser, updateUser, updateUserAvatar,
} = require('../controllers/users');
const { validateUserId, validateUserUpdateData, validateUserAvatar } = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateUserUpdateData, updateUser);
router.patch('/me/avatar', validateUserAvatar, updateUserAvatar);

module.exports = router;
