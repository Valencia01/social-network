const { User } = require('../models');

const userData = [
  {
    username: 'Valencia01',
    email: 'kiina12345@gmail.com'
  },
  {
    username: 'HPSilly',
    email: 'jr75169@gmail.com'
  },
  {
    username: 'testing stuff',
    email: 'testing@example.com'
  }
];

const seedUsers = () => User.insertMany(userData);

module.exports = seedUsers;