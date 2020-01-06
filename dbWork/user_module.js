var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var directorateSchema = new Schema({
  collegeList: {
    type: String,
    required: [true]
  }
});

var collegeSchema = new Schema({
  username: {
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
  yearOfPassing: {
    type: Date,
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
  regNo: Number,
  password: {
    type: String,
    required: [true]
  },
  firstName: String,
  secondName: String,
  phone: Number,
  ugYearOfPassing: Date,
  pgCourse: String,
  pgYearOfPassing: Date,
  research: String,
  researchYearOfPassing: Date,
  designation: String,
  companyName: String,
  residence: String,
  hometown: String,
  skills: {
    football: Boolean,
    volleyball: Boolean,
    cricket: Boolean,
    hockey: Boolean,
    others: Boolean
  }
});

exports.Alumni = mongoose.model("alumniDB", userSchema);
exports.College = mongoose.model("collegeDB", collegeSchema);
exports.Directorate = mongoose.model("directorate", directorateSchema);