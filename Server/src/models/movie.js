const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movie = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
    type: String,
    director: String,
    category: String,
    star: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", movie);
