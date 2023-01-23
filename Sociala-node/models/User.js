require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  phone : String,
intrest : String,
country : String,
town : String,
address : String,
bio : String,
});
module.exports = mongoose.model("user", User);
