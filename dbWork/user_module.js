var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _username: String,
  _email: String,
  _password: String,
});
module.exports = mongoose.model("users", userSchema);
