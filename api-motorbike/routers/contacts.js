const { Contact } = require("../models/contact");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const contactList = await Contact.find();

  if (!contactList)
    return res.status(404).json({ mesage: "Contact not found" });

  res.status(201).json(contactList);
});

router.post("/", async (req, res) => {
  let newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  newContact = await newContact.save();

  if (!newContact)
    return res.status(404).json({ mesage: "Contact cannot be created" });

  res.status(201).json({ message: "Contact created successfully" });
});

module.exports = router;
