const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name required"],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "Price required"],
    min: [0, "Price cannot be negative"]
  },
  category: {
    type: String,
    required: [true, "Category required"]
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
