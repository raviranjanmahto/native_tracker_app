const User = require("../models/userModel");
const createToken = require("../utils/createToken");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.create({ email, password });
    user.password = undefined;
    createToken(user, 201, res);
  } catch (error) {
    res.status(422).json({ status: "fail", message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ status: "fail", message: "All fields are required!" });

    const user = await User.findOne({ email }).select("+password");
    if (!user || password !== user.password)
      return res
        .status(400)
        .json({ status: "fail", message: "Invalid email or password!" });

    user.password = undefined;
    createToken(user, 200, res);
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};


