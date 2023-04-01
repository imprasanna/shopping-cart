const genAuthToken = require("../utils/genAuthToken");
const bcrypt = require("bcrypt");
const Joi = require("joi"); //for form validation
const { User } = require("../models/user");

const validateUser = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(200).required().email(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .max(100)
      .required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message); // 400 is code status for bad request
  }

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send("Invalid email or password!!!");
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) {
    return res.status(400).send("Invald email or password!!!");
  }

  const token = genAuthToken(user);

  res.send(token);
};

module.exports = { validateUser };
