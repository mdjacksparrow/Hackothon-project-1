const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const directorateSchema = new Schema({
  collegeName: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true]
  }
});

//////////////////////////////////////////////SETUP FOR LOCAL MONGOOSE PLUGIN FOR IMPLEMENTING HASH WITH SALTS ////////////////////////////////////////////////////////
directorateSchema.plugin(passportLocalMongoose);

const collegeSchema = new Schema({
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

//////////////////////////////////////////////SETUP FOR LOCAL MONGOOSE PLUGIN FOR IMPLEMENTING HASH WITH SALTS ////////////////////////////////////////////////////////
collegeSchema.plugin(passportLocalMongoose);

const userSchema = new Schema({
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

//////////////////////////////////////////////SETUP FOR LOCAL MONGOOSE PLUGIN FOR IMPLEMENTING HASH WITH SALTS ////////////////////////////////////////////////////////
userSchema.plugin(passportLocalMongoose);


const logindetailSchema = new Schema({
  username : String,
  password : String
});

//////////////////////////////////////////////SETUP FOR LOCAL MONGOOSE PLUGIN FOR IMPLEMENTING HASH WITH SALTS ////////////////////////////////////////////////////////
logindetailSchema.plugin(passportLocalMongoose);

const eventSchema = new Schema({
  college: String,
  title : String,
  content: String,
});

//////////////////////////////////////////////SETUP FOR LOCAL MONGOOSE PLUGIN FOR IMPLEMENTING HASH WITH SALTS ////////////////////////////////////////////////////////
eventSchema.plugin(passportLocalMongoose);

exports.Alumni = mongoose.model("alumnidb", userSchema);
exports.College = mongoose.model("collegedb", collegeSchema);
exports.Directorate = mongoose.model("directorate", directorateSchema);
exports.loginDetail = mongoose.model("loginDetail", logindetailSchema)
exports.Event = mongoose.model('event', eventSchema);