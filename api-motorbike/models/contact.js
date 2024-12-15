const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  {
    timeStamp: true,
  }
);

exports.Contact = mongoose.model("Contact", contactSchema);
