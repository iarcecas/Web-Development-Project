const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const product = await newProduct.save();
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

exports.updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
  res.status(200).json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(req.params.productId);
  res.status(200).json({ message: 'Product deleted' });
};

exports.deleteAllProducts = async (req, res) => {
    await Product.deleteMany({});
    res.status(200).json({ message: 'All products deleted' });
  };

  exports.findProductsByName = async (req, res) => {
    const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json(products);
  };
  
  
  