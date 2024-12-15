const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  passwordHash: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.set("toJson", {
  virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
