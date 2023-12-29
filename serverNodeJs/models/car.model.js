const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  model: {
    type: String,
    required: true,
    maxlength: 50,
  },
  year: {
    type: Number,
    required: true,
    maxlength: 4,
  },
  rent_per_day: {
    type: Number,
    required: true,
  },
  specifications: {
    number_of_doors: {
      type: Number,
      required: true,
    },
    number_of_people: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    number_of_bags: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("Car", carSchema);
