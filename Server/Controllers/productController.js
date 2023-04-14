const asyncHandler = require("express-async-handler");
const productModel = require("../Models/ProductModel");
const { query } = require("express");
const ProductModel = require("../Models/ProductModel");

// @desc  Create a new product
// @route POST -> /api/products/create
// @access Admin

exports.createProduct = asyncHandler(async (req, res, next) => {
  const newProduct = new productModel(req.body);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json({
      success: true,
      savedProduct,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

// @desc  updating a product
// @route PUT -> /api/products/update/:id
// @access Admin

exports.updateProduct = asyncHandler(async (req, res, next) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc  getting all new product
// @route GEt -> /api/products/all
// @access Admin,User

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let products ;
  try {
    if(qNew){
        products = await ProductModel.find().sort({createdAt: -1}).limit(1)
    }else if(qCategory){
        products = await productModel.find({categories:{
            $in:[qCategory],
        }})
    }else{
        products = await productModel.find()
    }

    res.status(200).json({
        products
    })
  } catch (error) {}
});

// @desc  Get a single product
// @route GET -> /api/products/:id
// @access Admin ,User

exports.getSinlgeProducts = asyncHandler(async (req, res, next) => {
  const Product = await productModel.findById(req.params.id);

  res.status(200).json({
    success: true,
    Product,
  });
});

// @desc  Deleting a new product
// @route DELETE -> /api/products/delete/:id
// @access Admin

exports.deletProducts = asyncHandler(async (req, res, next) => {
  await productModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
