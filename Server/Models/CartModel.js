const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true ,ref: 'User' },
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
},
{ timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
