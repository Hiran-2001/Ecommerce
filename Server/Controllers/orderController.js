const asyncHandler = require("express-async-handler");
const orderModel = require("../Models/OrderModel");
const ProductModel = require("../Models/ProductModel");

//@desc new user registration api
//@route POST => /api/order/create
//@access User

exports.createOrder = asyncHandler(async (req, res, next) => {
  try {
    
    const newOrder = await orderModel.create(req.body);
    const savedOrder = await newOrder.save();

    res.status(200).json({
      success: true,
      savedOrder,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc update order status
//@route PUT => /api/order/update/:id
//@access Admin

exports.updateOrder = asyncHandler(async (req, res, next) => {
  try {
    const order = await orderModel.findByIdAndUpdate(
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
      order,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc delete order
//@route DELETE => /api/order/delete/:id
//@access Admin & User

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  try {
    const deleteOrder = await orderModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "order deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc all user orders
//@route GET => /api/order/all
//@access User

exports.userOrders = asyncHandler(async (req, res, next) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//@desc income
//@route GET => /api/order/income
//@access Admin

exports.income = asyncHandler(async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(new Date().setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await orderModel.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {}
});
