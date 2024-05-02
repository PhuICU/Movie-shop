const Product = require("../models/movie");

const movieController = {
  //get products
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //get product by id
  getProductById: async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //create product
  createProduct: async (req, res) => {
    try {
      const { title, description, image, price, type } = req.body;
      console.log(req.body);
      console.log(req.file);
      const product = await Product.findOne({ title });
      if (product)
        return res.status(400).json({ msg: "This product already exists." });
      console.log(req.body);

      const path = req.file.path.replace(/\\/g, "/");

      const newProduct = new Product({
        title,
        description,
        image: path,
        price,
        type,
      });
      await newProduct.save();
      console.log({ newProduct });
      res.json({ msg: "Created a product." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //update product

  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //delete product
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  classification: async (req, res) => {
    try {
      const { category } = req.params;
      const products = await Product.find({ category });
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  search: async (req, res) => {
    try {
      const { title } = req.query;
      const products = await Product.find({
        title: { $regex: title, $options: "i" },
      });
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = movieController;
