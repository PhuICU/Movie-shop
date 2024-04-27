const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// cart = { user_id: "123", products: [{ product: "123", quantity: 1 }]}
const Cart = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", Cart);
