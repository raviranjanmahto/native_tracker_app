const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.verifyToken = async (req, res, next) => {
  let token;
  try {
    // const { authorization } = req.headers;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token)
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in! Please log in to get access.",
      });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser)
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token does no longer exist.",
      });

    req.user = currentUser;
    next();
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};
