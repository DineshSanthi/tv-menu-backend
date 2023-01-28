const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  foodName: {
    type: String,
    trim: true,
    required: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
  cartImageURL: {
    type: String,
    required: false,
  },
  foodCategory: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("FoodItems", productSchema);
