const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();

router.get(`/`, async (_req, res) => {
  const categoryList = await Category.find();
  res.json(categoryList);
});

router.post(`/`, async (req, res) => {
  let newCategory = Category({
    name: req.body.name,
  });
  newCategory = await newCategory.save();

  if (!newCategory)
    return res.status(404).json({ message: "Category cannot be created" });

  return res.status(201).json(newCategory);
});

router.put("/:id", async (req, res) => {
  const newCategory = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );

  if (!newCategory)
    return res.status(400).json({ message: "Category cannot be update" });

  return res.status(200).json(newCategory);
});

router.delete("/:id", async (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "the category is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});
module.exports = router;
