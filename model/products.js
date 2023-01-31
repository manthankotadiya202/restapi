const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
