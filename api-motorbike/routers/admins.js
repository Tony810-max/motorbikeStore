const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const findAdmins = await User.find({ isAdmin: true });

  if (!findAdmins) return res.status(404).json({ message: "No admins found" });

  return res.status(200).json(findAdmins);
});

router.post("/login", async (req, res) => {
  const secret = process.env.secret;
  const { email, password } = req.body;
  const admin = await User.findOne({ email, isAdmin: true });
  if (!admin) return res.status(404).json({ message: "Admin not found" });

  if (admin && bcrypt.compareSync(req.body.password, admin.passwordHash)) {
    const token = jwt.sign(
      {
        adminID: admin.id,
        isAdmin: admin.isAdmin,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ admin: admin, token: token });
  } else {
    res.status(404).json({ message: "email or password is not correct" });
  }
});

router.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  const isAdmin = req.body.isAdmin;

  const findUser = await User.findByIdAndUpdate(
    userId,
    {
      isAdmin,
    },
    {
      new: true,
    }
  );
  if (!findUser) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User updated roles successfully" });
});

module.exports = router;
