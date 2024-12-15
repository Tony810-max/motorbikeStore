const { Order } = require("../models/order");
const { Cart } = require("../models/cart");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const status = req.query.status.toLowerCase();
  let orderList = await Order.find({ status })
    .populate({
      path: "Carts",
      populate: "user",
      populate: {
        path: "items",
        populate: "product",
      },
    })
    .populate("user");

  if (!orderList) return res.status(404).json({ message: "Order not found" });

  return res.status(200).json(orderList);
});

router.get("/me/:id", async (req, res) => {
  const userId = req.params.id;
  const status = req.query.status.toLowerCase();
  let orderList = await Order.find({
    user: userId,
    status,
  }).populate("Carts");

  if (!orderList) return res.status(404).json({ message: "Order not found" });

  return res.status(200).json(orderList);
});

router.post(`/me/:idCart`, async (req, res) => {
  const idCart = req.params.idCart;
  const idUser = req.body.user;
  let findCart = await Cart.findOne({ _id: idCart }).populate("items.product");

  if (!findCart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  const totalPrice = findCart.items.reduce((total, item) => {
    return Number(total) + Number(item.product.price) * Number(item.quantity);
  }, 0);

  let newOrder = await Order({
    Carts: idCart,
    user: idUser,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    totalPrice,
  });
  await Cart.findByIdAndUpdate(
    { _id: idCart },
    {
      delete: Date.now(),
    },
    {
      new: true,
    }
  );
  newOrder = await newOrder.save();

  if (!newOrder)
    return res.status(404).json({ message: "Order cannot be created" });

  return res.status(201).json(newOrder);
});

router.delete("/me/status/:idOrder", async (req, res) => {
  const idOrder = req.params.idOrder;
  const idUser = req.body.user;
  const findOrder = await Order.findOne({ _id: idOrder, user: idUser });

  if (!findOrder) {
    return res.status(404).json({ message: "Order not found" });
  }

  let updateStatusOrder = await Order.findByIdAndUpdate(
    idOrder,
    {
      status: "cancelled",
    },
    { new: true }
  );

  if (!updateStatusOrder)
    return res.status(404).json({ message: "Order cannot be updated" });

  return res
    .status(200)
    .json({ updateStatusOrder, message: "Order updated successfully" });
});

router.patch("/status/:idOrder", async (req, res) => {
  const idOrder = req.params.idOrder;

  const findOrder = await Order.findOne({ _id: idOrder });

  if (!findOrder) {
    return res.status(404).json({ message: "Order not found" });
  }

  let updateStatusOrder = await Order.findByIdAndUpdate(
    idOrder,
    {
      status: req.body.status,
    },
    { new: true }
  );

  if (!updateStatusOrder)
    return res.status(404).json({ message: "Order cannot be updated" });

  return res.status(200).json(updateStatusOrder);
});

module.exports = router;
