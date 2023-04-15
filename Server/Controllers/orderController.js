const asyncHandler = require("express-async-handler");
const orderModel = require("../Models/OrderModel")

exports.createOrder = asyncHandler(async(req,res,next)=>{

    
    try {
        const newOrder = await orderModel.create(req.body);
        const savedOrder = await newOrder.save();

        res.status(200).json({
            success:true,
            savedOrder
        })
    } catch (error) {
        res.status(500).json(error)
    }
})


exports.updateOrder = asyncHandler(async(req,res,next)=>{

    
    try {
        const order = await orderModel.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },
        {
            new:true
        });

      res.status(200).json({
        success:true,
        order
      })
    } catch (error) {
        res.status(500).json(error)
    }
})


exports.deleteOrder = asyncHandler(async(req,res,next)=>{

    
    try {
        const deleteOrder = await orderModel.findByIdAndDelete(req.params.id)
      res.status(200).json({
        success:true,
        "message": "order deleted successfully"
      })
    } catch (error) {
        res.status(500).json(error)
    }
})