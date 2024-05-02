const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DetailOrder = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  sale: {
    type: Number,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("DetailOrder", DetailOrder);
