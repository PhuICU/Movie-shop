const Order = require("../models/order");
const Product = require("../models/movie");
const DetailPayment = require("../models/detailPayment");
const DetailOrder = require("../models/detailOrder");
const Cart = require("../models/cart");
const User = require("../models/user");

const cartdelete = require("../controllers/cartcontroller");

const moment = require("moment");

const orderController = {
  addOrder: async (req, res) => {
    try {
      const { address, phone, name, payment, user_id } = req.body;
      const cart = await Cart.findOne({ user_id }).populate("products.product");
      const user = await User.findById(user_id);
      if (!cart) return res.status(400).json({ msg: "Cart is empty" });
      if (!user) return res.status(400).json({ msg: "User not found" });
      const newOrder = new Order({
        address,
        phone,
        name,
        payment,
        user_id,
        total: cart.total,
      });
      await newOrder.save();
      cart.products.map(async (item) => {
        const newDetailOrder = new DetailOrder({
          order_id: newOrder._id,
          product_id: item.product._id,
          price: item.product.price,
        });
        await newDetailOrder.save();
        await Product.findByIdAndUpdate(item.product._id, {
          $inc: { sold: item.quantity },
        });
      });

      res.json({ msg: "Order Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getOrders: async (req, res) => {
    try {
      const orders = await Order.find({ user_id: req.user.id });
      res.json(orders);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getOrdersAdmin: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { status } = req.body;
      await Order.findByIdAndUpdate(req.params.id, { status });
      res.json({ msg: "Updated a Order" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  addOrderByVNPay: async (req, res) => {
    try {
      const { address, phone, name, payment, user_id, total } = req.body;
      const cart = await Cart.findOne({ user_id }).populate("products.product");
      const user = await User.findById(user_id);
      if (!cart) return res.status(400).json({ msg: "Cart is empty" });
      if (!user) return res.status(400).json({ msg: "User not found" });
      const newOrder = new Order({
        address,
        phone,
        name,
        payment,
        user_id,
        total,
      });
      await newOrder.save();
      cart.products.map(async (item) => {
        const newDetailOrder = new DetailOrder({
          order_id: newOrder._id,
          product_id: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        });
        await newDetailOrder.save();
        await Product.findByIdAndUpdate(item.product._id, {
          $inc: { sold: item.quantity },
        });
      });
      await Cart.findOneAndDelete({ user_id });
      res.json({ msg: "Order Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

module.exports = orderController;
