const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movie = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    star: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", movie);

// title: String,
//     description: String,
//     price: Number,
//     image: String,
//     type: String,
//     director: String,
//     category: String,
//     star: String,
//     rate: {
//       type: Number,
//       default: 0,
//     },
