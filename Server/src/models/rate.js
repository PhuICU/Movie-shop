const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rate = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  value: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
  },
});

module.exports = mongoose.model("Rate", rate);
