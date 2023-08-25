const { User, Thought } = require('../models');

module.exports = {
    //gets all the thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } 
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //gets a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID found' })
            }
            res.json(thought);
        } 
        catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}