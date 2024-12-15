const { Cart } = require("../models/cart");
const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  const orderItemList = await Cart.find().populate({
    path: "items",
    populate: {
      path: "product",
      populate: "category",
    },
  });
  res.json(orderItemList);
});

router.get("/me/:id", async (req, res) => {
  const userId = req.params.id;
  const cartItemList = await Cart.find({
    user: userId,
    delete: null,
  }).populate({
    path: "items",
    populate: {
      path: "product",
      populate: "category",
    },
  });

  if (!cartItemList)
    return res.status(404).json({ message: "order not found" });

  res.json(cartItemList);
});

router.post(`/me/:idProduct`, async (req, res) => {
  const idProduct = req.params.idProduct;
  const userId = req.body.user;
  let cart = await Cart.findOne({ user: userId, delete: null });
  if (!cart) {
    cart = new Cart({
      user: userId,
      items: [
        {
          product: idProduct,
          color: req.body.color,
          quantity: req.body.quantity,
        },
      ],
    });
  } else {
    cart.items[0].color.push(req.body.color);
    const productIndex = cart.items.findIndex(
      (item) => item.product.toString() === idProduct
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += req.body.quantity;
    } else {
      cart.items.push({ product: idProduct, quantity: req.body.quantity });
    }
  }

  cart = await cart.save();
  return res.status(200).json({ message: "Product Added To Cart" });
});

router.delete("/me/:id", async (req, res) => {
  const idProduct = req.params.id;
  const idUser = req.body.user;
  const idCart = req.body.idCart;
  const findCarts = await Cart.findOne({ _id: idCart });

  if (!findCarts) return res.status(404).json({ message: "Cart Not Found" });

  let findCart = await Cart.findOne({ user: idUser });
  let findCartIndex = findCart.items.findIndex(
    (item) => item.product.toString() === idProduct
  );

  if (findCartIndex > -1) {
    if (findCart.items.length > 1) {
      findCart.items.splice(findCartIndex, 1);
      await findCart.save();
      return res.status(200).json({ message: "Product Removed From Cart" });
    } else {
      await Cart.findByIdAndDelete({ _id: idCart });

      return res.status(200).json({ message: "Cart is empty" });
    }
  }
  return res.status(404).json({ message: "Product Not Found In Cart" });
});

module.exports = router;
