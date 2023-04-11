const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount:{
    type:Number,required:true
  },
  address:{
    type:Object,required:true
  },
  status:{
    type:String,required:true,default:"pending"
  },
});

module.exports = mongoose.model("order", OrderSchema);
