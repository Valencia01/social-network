const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
} = require('../../controllers/userController');

//gets all users
router.route('/').get(getUsers);

//gets a single user
router.route('/:userId').get(getSingleUser);

module.exports = router;