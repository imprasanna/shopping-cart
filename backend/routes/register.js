const bcrypt = require("bcrypt");
const Joi = require("joi"); //for form validation
const express = require("express");
const User = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();

router.post("/", async (req, res) => {
  // Check the data coming from user as request
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string.min(3).max(5).max(200).required().email(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .max(100)
      .required(),
  });

  const { error } = schema.validate(req.body);

  // Return error message if any
  if (error) {
    return res.status(400).send(error.details[0].message); // 400 is code status for bad request
  }

  //  Check if user already exists or not
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send("User already exists!");
  }

  // Create user document if user does not exist
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Encrypt or hash the password and save the hashed password to the database
  const salt = await bcrypt.genSalt(10); // salt is a random string, here it has default of 10 characters

  user.password = await bcrypt.hash(user.password, salt);

  // Save the user details in the database after hashing the password
  await user.save();

  // Generate token for the given userDetails
  const token = genAuthToken(user);

  // Send the token with the userdetails as response to the frontend
  res.send(token);
});

module.exports = router;
