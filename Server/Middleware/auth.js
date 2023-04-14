const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");
const asyncHandler = require("express-async-handler");

// generating token

exports.isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwtToken;

  if (!token) {
    res.status(401).json({message:"Please login"});
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await UserModel.findById(decoded.id);
  console.log(req.user.isAdmin);
  next();
});

exports.isAuthorizedUser = asyncHandler(async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
});
