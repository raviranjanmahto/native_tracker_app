const jwt = require("jsonwebtoken");

const createToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRE_IN,
  });
  return res.status(statusCode).json({ status: "success", token });
};

module.exports = createToken;
