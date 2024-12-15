const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    title: String,
    describe: String,
    rate: Number,
    image: String,
    countInStock: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    price: Number,
    color: [String],
  },
  {
    timestamps: true,
  }
);

exports.Product = mongoose.model("Product", productSchema);
