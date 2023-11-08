const Category = require('../models/category');

exports.createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  const category = await newCategory.save();
  res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
};

exports.getCategory = async (req, res) => {
  const category = await Category.findById(req.params.categoryId);
  res.status(200).json(category);
};

exports.updateCategory = async (req, res) => {
  const updatedCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true });
  res.status(200).json(updatedCategory);
};

exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndRemove(req.params.categoryId);
  res.status(200).json({ message: 'Category deleted' });
};
