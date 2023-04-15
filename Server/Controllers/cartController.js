const cartModel = require("../Models/CartModel");
const asyncHandler = require("express-async-handler");

//@desc to create a cart to add users products
//@route POST => /api/cart/new
//@access  User

exports.createCart = asyncHandler(async (req, res, next) => {
  const cart = await cartModel.create(req.body);

  try {
    const savedCart = await cart.save();
    res.status(200).json({
      success: true,
      savedCart,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc user can update their cart
//@route PUT => /api/cart/update/:id
//@access  User

exports.updateCart = asyncHandler(async (req, res, next) => {
  try {
    const updateCart = await cartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      updateCart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});

//@desc user can delete their cart
//@route DELETE => /api/cart/delete/:id
//@access  User

exports.deleteCart = asyncHandler(async (req, res, next) => {
  await cartModel.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json({
      success: true,
      message: "cart deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});

//@desc user can get their single item in  cart
//@route GET => /api/cart/:userId
//@access  User

exports.getSingleItem = asyncHandler(async (req, res, next) => {
  try {
    const cart = await cartModel.findOne({userId:req.params.userId});

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        error
    })
  }
});


//@desc admin can see all user cart
//@route GET => /api/cart/all
//@access  Admin

exports.getItems = asyncHandler(async (req, res, next) => {
    try {
      const cart = await cartModel.find();
  
      res.status(200).json({
        success: true,
        cart,
      });
    } catch (error) {
      res.status(500).json({
          success:false,
          error
      })
    }
  });