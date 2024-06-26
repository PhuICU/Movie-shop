const Cart = require("../models/cart");

const cartController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.json(carts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Get a cart
  getCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user_id: req.params.id }).populate(
        "products.product"
      );
      res.json(cart);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Add a cart no quantity
  addCart: async (req, res) => {
    try {
      const { product_id, user_id } = req.body;
      const cart = await Cart.findOne({ user_id });
      if (cart) {
        if (cart.products.find((p) => p.product == product_id)) {
          return res.json({ msg: "Product already added" });
        } else {
          cart.products.push({ product: product_id });
        }
        await cart.save();
        return res.json({ msg: "Added a Product" });
      }
      const newCart = new Cart({
        user_id,
        products: [{ product: product_id }],
      });
      await newCart.save();
      res.json({ msg: "Added a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateCart: async (req, res) => {
    try {
      const { product_id, quantity } = req.body;
      const cart = await Cart.findOne({ user_id: req.params.id });
      console.log(req.body);
      let itemIndex = cart.products.findIndex((p) => p.product == product_id);
      let productItem = cart.products[itemIndex];
      productItem.quantity = quantity;
      cart.products[itemIndex] = productItem;
      await cart.save();

      res.json({ msg: "Updated a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  removeProduct: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user_id: req.params.id });
      console.log(cart.products);
      cart.products = cart.products.filter(
        (item) => item.product != req.query.product_id
      );
      console.log(req.query);
      console.log(cart.products);
      await cart.save();
      res.json({ msg: "Removed a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  clearCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user_id: req.params.id });
      cart.products = [];
      await cart.save();
      res.json({ msg: "Cleared a Cart" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = cartController;
