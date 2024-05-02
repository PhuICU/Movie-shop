const Evaluate = require("../models/evaluate");

const evaluateController = {
  //comment

  addcomment: async (req, res) => {
    try {
      const { user_id, product_id, comments } = req.body;
      const newComment = new Evaluate({ user_id, product_id, comments });
      await newComment.save();
      res.json({ msg: "Commented successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //get all comments by product_id
  getComments: async (req, res) => {
    try {
      const { product_id } = req.params;
      const comments = await Evaluate.find({ product_id });
      res.json(comments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = evaluateController;
