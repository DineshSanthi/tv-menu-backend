const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const categoriesSchema = new mongoose.Schema({
  foodCategory: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Categories", categoriesSchema);
