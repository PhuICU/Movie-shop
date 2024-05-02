const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  detail: [
    {
      type: mongoose.Types.ObjectId,
      ref: "DetailOrder",
    },
  ],
  vat: {
    type: Number,
    require: true,
  },

  payment: {
    type: String,
    enum: ["VNPay", "COD"],
    default: "COD",
    require,
  },
  status: {
    type: String,
    enum: ["pending", "cancel"],
    default: "pending",
    require: true,
  },
});

module.exports = mongoose.model("Order", Order);
