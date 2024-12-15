const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        color: {
          type: [String],
          required: true,
        },
      },
    ],
    delete: {
      type: Date,
      default: null,
    },
  },
  {
    timeStamp: true,
  }
);

exports.Cart = mongoose.model("Cart", orderItemSchema);
