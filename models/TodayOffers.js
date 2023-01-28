const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const todayOffersSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  saleName: {
    type: String,
    trim: true,
    required: false,
  },
  saleTitle: {
    type: String,
    trim: true,
    required: false,
  },
  saleDescription: {
    type: String,
    trim: true,
    required: false,
  },
  salePrice: {
    type: Number,
  },

  fiftypercentOff1Title: {
    type: String,
    trim: true,
    required: false,
  },
  fiftypercentOff1Description: {
    type: String,
    trim: true,
    required: false,
  },
  
  fiftypercentOff2Title: {
    type: String,
    trim: true,
    required: false,
  },
  fiftypercentOff2Description: {
    type: String,
    trim: true,
    required: false,
  },
  
  comboOffersTitle: {
    type: String,
    trim: true,
    required: false,
  },
  comboOffersDescription: {
    type: String,
    trim: true,
    required: false,
  },
  comboOffersPrice: {
    type: Number,
  },
  
  festiveOffersTitle: {
    type: String,
    trim: true,
    required: false,
  },
  festiveOffersDescription: {
    type: String,
    trim: true,
    required: false,
  },
  festiveOffersPrice: {
    type: Number,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("TodayOffers", todayOffersSchema);
