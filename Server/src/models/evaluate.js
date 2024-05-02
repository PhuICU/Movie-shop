const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const evaluate = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },

    comments: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Evaluate", evaluate);
