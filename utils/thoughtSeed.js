const { Thought } = require('../models');
const { User } = require('../models');

const seedThoughts = async () => {
  const users = await User.find({});

  const thoughtData = [
    {
      thoughtText: 'I\'m always vibin',
      username: users[0].username
    },
    {
      thoughtText: 'Just gaming and chillin',
      username: users[1].username
    },
    {
        thoughtText: 'Not doin much per usual',
        username: users[2].username
    }
  ];

  const thoughts = await Thought.insertMany(thoughtData);

  await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } });
  await User.findByIdAndUpdate(users[1]._id, { $push: { thoughts: thoughts[1]._id } });
  await User.findByIdAndUpdate(users[2]._id, { $push: { thoughts: thoughts[2]._id } });

  return thoughts;
};


module.exports = seedThoughts;