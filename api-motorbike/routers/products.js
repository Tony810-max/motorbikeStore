const { Category } = require("../models/category");
const { Product } = require("../models/product");
const express = require("express");
const router = express.Router();

router.get(`/`, async (_req, res) => {
  const productList = await Product.find().populate("category");
  res.json(productList);
});

router.get(`/:id`, async (req, res) => {
  const productList = await Product.findOne({ _id: req.params.id }).populate(
    "category"
  );

  if (!productList)
    return res.status(404).json({ message: "Product not found" });

  res.json(productList);
});

router.post(`/`, async (req, res) => {
  const categoryId = req.body.category;
  const findCategory = await Category.findOne({ _id: categoryId });
  if (!findCategory)
    return res.status(404).json({ message: " Category not found" });

  let product = await new Product({
    name: req.body.name,
    title: req.body.title,
    rate: req.body.rate,
    image: req.body.image,
    category: req.body.category,
    countInStock: req.body.countInStock,
    price: req.body.price,
    color: req.body.color,
  });

  product = await product.save();

  if (!product)
    return res.status(404).json({ message: "Product cannot be create" });

  return res.status(201).json(product);
});

router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  const productDelete = await Product.findByIdAndDelete(productId);

  if (!productDelete)
    return res.status(404).json({ message: "Product cannot be deleted" });
  res.json({ message: "Product deleted successfully" });
});

module.exports = router;
