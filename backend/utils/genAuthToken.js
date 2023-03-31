const jwt = require("jsonwebtoken");

require("dotenv").config();

const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    {
      secretKey,
    }
  );
};

module.exports = genAuthToken;
