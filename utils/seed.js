const { User, Thought } = require('../models');
const seedUsers = require('./userSeed');
const seedThoughts = require('./thoughtSeed');
const db = require('../config/connection');


db.once('open', async () => {

  await User.deleteMany({});
  await Thought.deleteMany({});

  await seedUsers();
  await seedThoughts();

  console.log('the seeds are planted');
  process.exit(0);
});