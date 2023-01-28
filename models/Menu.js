const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const menuSchema = new mongoose.Schema({
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
  foodType: {
    type: String,
    trim: true,
    required: false,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  familyPrice: {
    type: Number,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("MenuItems", menuSchema);
