require("../config/database");
const mongoose = require("mongoose");

const Message = mongoose.Schema({
  message: String,
  comment: Array,
});
module.exports = mongoose.model("message", Message);
