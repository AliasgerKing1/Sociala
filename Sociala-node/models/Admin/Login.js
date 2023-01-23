require("../../config/Database");
const mongoose = require("mongoose");

const adminLogin = mongoose.Schema({
  userName: String,
  password: String,
});
module.exports = mongoose.model("adminLogin", adminLogin);
