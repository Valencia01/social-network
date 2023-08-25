const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
} = require('../../controllers/thoughtController');

//gets all thoughts
router.route('/').get(getThoughts);

//gets a single thought
router.route('/:thoughtId').get(getSingleThought);


module.exports = router;