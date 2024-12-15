const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

exports.Category = mongoose.model("Category", categorySchema);
