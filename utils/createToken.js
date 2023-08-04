const jwt = require("jsonwebtoken");

const createToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, "This is my secret key!", {
    expiresIn: "30d",
  });
  return res.status(statusCode).json({ status: "success", token });
};

module.exports = createToken;
