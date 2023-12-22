const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  additionalOptions: {
    type: String,
    default: "",
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
