const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('Product',ProductSchema)