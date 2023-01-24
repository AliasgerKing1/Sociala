require("../../config/Database");
const mongoose = require("mongoose");

const admin = mongoose.Schema({
  name : String,
  username: String,
  password: String,
});
module.exports = mongoose.model("admin", admin);
