const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");
const asyncHandler = require("express-async-handler");

// generating token

exports.isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwtToken;

  const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    
  const user = await UserModel.findById({_id:verifyToken._id})
  console.log(user);
  next();
});

exports.isAuthorizedUser = asyncHandler(async (req, res, next) => {
  isAuthenticated(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that"); 
    }
  });
});
