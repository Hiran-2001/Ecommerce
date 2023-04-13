const { generateToken } = require("../Middleware/auth");
const  asyncHandler  = require('express-async-handler') ;
const userModel = require("../Models/UserModel");
exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
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

      // console.log(user._id);
      // console.log(user.id);

      const token = await user.generateToken();
      console.log(token);
      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      res.status(201).json({
        success: true,
        user,
      });
    }
  } catch (error) {}
};

//logout user 

exports.logout = asyncHandler(async (req,res)=>{
  res.cookie('jwtToken',null,{
    expires: new Date(Date.now()),
    httpOnly:true
  }).status(200).json({
    success:true,
    message:"Logout successfully"
  })
})

// update user

exports.update = async (req, res) => {
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
};
