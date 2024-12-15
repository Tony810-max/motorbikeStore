const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (_req, res) => {
  const userList = await User.find().select("-passwordHash");

  if (!userList) return res.status(404).json({ message: "User not found" });

  return res.status(200).json(userList);
});

router.get("/me/:id", async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const user = await User.findById(userId).select("-passwordHash");

  if (!user) return res.status(404).json({ message: "User not found" });

  return res.status(200).json(user);
});

router.post(`/register`, async (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;

  const findUser = await User.findOne({ email });
  const findPhoneUser = await User.findOne({ phone });

  if (findPhoneUser) {
    return res.status(404).json({ message: "Phone already exists" });
  }

  if (findUser) {
    return res.status(404).json({ message: "Email already exists" });
  }

  let user = User({
    name: req.body.name,
    email,
    phone,
    address: req.body.address,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
  });
  user = await user.save();

  if (!user) return res.status(404).json({ message: "User cannot be created" });

  return res.status(201).json(user);
});

router.post(`/login`, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) return res.status(404).json({ message: "email not found" });

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userID: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ user: user, token: token });
  } else {
    res.status(404).json({ message: "email or password is not correct" });
  }
});

router.post("/change-password/:id", async (req, res) => {
  const userId = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const user = await User.findOne({ _id: userId });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = bcrypt.compareSync(oldPassword, user.passwordHash);
  if (!isMatch)
    return res.status(404).json({ message: "Old password is incorrect" });
  user.passwordHash = bcrypt.hashSync(newPassword, 10);
  const updatedUser = await user.save();
  if (!updatedUser)
    return res.status(404).json({ message: "Password cannot be updated" });
  res.status(200).json({ message: "Password updated successfully" });
});

router.put("/me/:id", async (req, res) => {
  const userId = req.params.id;
  const email = req.body.email;
  const phone = req.body.phone;

  const findEmailUser = await User.findOne({ email });
  if (findEmailUser) {
    return res.status(404).json({ message: "Email đã tồn tại" });
  }

  const findPhoneUser = await User.findOne({ phone });

  if (findPhoneUser) {
    return res
      .status(401)
      .json({ message: "Số điện thoại đã có ai đó sử dụng" });
  }

  const user = await User.findByIdAndUpdate(
    userId,
    {
      name: req.body.name,
      email,
      phone,
      address: req.body.address,
    },
    { new: true }
  );
  if (!user) return res.status(404).json({ message: "User cannot be updated" });
  res.status(200).json({ user, message: "User updated successfully" });
});


module.exports = router;
