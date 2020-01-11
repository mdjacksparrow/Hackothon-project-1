var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var directorateSchema = new Schema({
  collegeName: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true]
  }
});

var collegeSchema = new Schema({
  college: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true]
  },
  password: {
    type: String,
    required: [true]
  }
});

var userSchema = new Schema({
  username: {
    type: String,
    required: [true]
  },
  course: {
    type: String,
    required: [true]
  },
  ugYearOfPassing: {
    type: Number,
    required: [true]
  },
  college: {
    type: String,
    required: [true]
  },
  city: {
    type: String,
    required: [true]
  },
   email: String,
  regNo: Number,
  password: {
    type: String,
    required: [true]
  },
  firstName: String,
  secondName: String,
  phone: Number,
  pgCourse: String,
  pgYearOfPassing: Number,
  research: String,
  researchYearOfPassing: Number,
  designation: String,
  companyName: String,
  residence: String,
  hometown: String,
  skills: []
});

var logindetailSchema = new Schema({
  username : String,
  password : String
});

var eventSchema = new Schema({
  college: String,
  title : String,
  content: String,
});

exports.Alumni = mongoose.model("alumnidb", userSchema);
exports.College = mongoose.model("collegedb", collegeSchema);
exports.Directorate = mongoose.model("directorate", directorateSchema);
exports.loginDetail = mongoose.model("loginDetail", logindetailSchema)
exports.Event = mongoose.model('event', eventSchema);