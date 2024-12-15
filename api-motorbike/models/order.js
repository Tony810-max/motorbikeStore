const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    Carts: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      requir: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "shipped", "in_transit", "cancelled"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports.Order = mongoose.model("Order", orderSchema);
