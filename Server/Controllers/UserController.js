const { generateToken } = require("../Middleware/auth");
const asyncHandler = require("express-async-handler");
const userModel = require("../Models/UserModel");

//@desc new user registration api
//@route POST => /api/user/register
//@access Admin & User


exports.register = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.send("Please fill all fiels");
    }

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      res.send("User already exist");
    }

    const user = new userModel({
      username,
      email,
      password,
    });
    const saved = await user.save();
    res.status(201).json({
      success: true,
      saved,
    });
  } catch (error) {
    console.log(error);
  }
});


//@desc user login api
//@route POST => /api/user/login
//@access Admin & User


exports.login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send("please fill all fields");
    }

    const user = await userModel.findOne({ email: email }).select("+password");

    if (user) {
      if ((await user.matchPassword(password)) === false) {
        res.send("Password doesnt match");
      }

      const token = await user.generateToken(user._id);

      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      res.status(201).json({
        success: true,
        user,
        token
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
  } catch (error) {}
});


//@desc user login api
//@route GET => /api/user/logout
//@access Admin & User
 

exports.logout = asyncHandler(async (req, res) => {
  try {
    res
      .cookie("jwtToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: `Logout successfully`,
      });
  } catch (error) {
    throw new Error(error);
  }
});

//@desc user can update their profile
//@route PUT => /api/user/update/:id
//@access Admin & User

exports.update = asyncHandler(async (req, res) => {
  const newUserData = {
    username: req.body.username,
    email: req.body.email,
  };

  const user = await userModel.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

//@desc user can delete their account
//@route GET => /api/user/delete/:id
//@access Admin & User


exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await userModel.findById(req.params.id);

  try {
    if (!user) {
      res.json({
        success: false,
        message: "not user find to delete",
      });
    }

    await userModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: `${user.username} deleted successfully`,
    });
  } catch (error) {}
});


//@desc to get all users information
//@route GET => /api/user/all
//@access Admin

exports.getAllUser = asyncHandler(async (req, res, next) => {
  
  const allUsers = await userModel.find();

  res.status(200).json({
    success:true,
    allUsers
  })
});
