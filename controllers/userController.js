const { User, Thought } = require('../models');

module.exports = {
    //gets all users
    async getUsers(req, res) {
        try {
          const users = await User.find();
          res.json(users);
        } 
        catch (err) {
          res.status(500).json(err);
        }
    },
    //gets one user
    async getSingleUser(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate(['friends', 'thoughts']);
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID'});
          }
    
          res.json(user);
        } 
        catch (err) {
          res.status(500).json(err);
        }
    },
}