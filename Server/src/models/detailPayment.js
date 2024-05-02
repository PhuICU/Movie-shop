const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DetailPayment = new Schema({
  price: {
    type: Number,
    require,
  },
  bank_code: {
    type: String,
    require,
  },
  bank_tran_no: {
    type: String,
    require,
  },
  card_type: {
    type: String,
    require,
  },
  // yyyyMMddHHmmss
  pay_date: {
    type: Number,
    require,
  },
});

module.exports = mongoose.model("DetailPayment", DetailPayment);
