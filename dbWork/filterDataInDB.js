const mongoose = require('mongoose');
const DB = require('./user_module');
const dbConnection = require('../dbWork/dbConnection');

//  Directorate - search using college name 
exports.filterDataFromCollege = function(collegeName,res) {

//Establishing connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ college : collegeName },'firstName secondName ugYearOfPassing city regNo course' , (err, docs) => {
    if (err) console.log(err);
    else {
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      console.log(arrOfUser);

  var numberOfAlumni = arrOfUser.length;

  res.render("filterCollegeData", {
    ArrOfUser: arrOfUser,
    NumberOfMembers: numberOfAlumni
  });

      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}

//  Directorate -Search by Register number
exports.filterDataFromCollegeByRegNo = function(RegNo,res) {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ regNo : RegNo },'firstName secondName ugYearOfPassing city regNo' , (err, docs) => {
    if (err) console.log(err);
    else {
      // console.log(docs);
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      console.log(arrOfUser);

  var numberOfAlumni = arrOfUser.length;

  res.render("filterCollegeData", {
    ArrOfUser: arrOfUser,
    NumberOfMembers: numberOfAlumni
  });

      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}


//  College-Search by  Year Of Passing
exports.filterDataFromCollegeByYearOfPassing = function(YearOfPassing,res) {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ ugYearOfPassing : YearOfPassing },'firstName secondName ugYearOfPassing city regNo' , (err, docs) => {
    if (err) console.log(err);
    else {
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      console.log(arrOfUser);

  var numberOfAlumni = arrOfUser.length;

  res.render("filterCollegeData", {
    ArrOfUser: arrOfUser,
    NumberOfMembers: numberOfAlumni
  });

      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}


//  College-Search by Year Of Passing
exports.filterDataFromCollegeByCity = function(City,res) {

//Establishing connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ city : City },'firstName secondName ugYearOfPassing city regNo' , (err, docs) => {
    if (err) console.log(err);
    else {
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      console.log(arrOfUser);

  var numberOfAlumni = arrOfUser.length;

  res.render("filterCollegeData", {
    ArrOfUser: arrOfUser,
    NumberOfMembers: numberOfAlumni
  });

      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}


// College-Search by Course
exports.filterDataFromCollegeBySubject = function(Subject,res) {

//Establishing connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ course : Subject },'firstName secondName ugYearOfPassing city regNo' , (err, docs) => {
    if (err) console.log(err);
    else {
      // console.log(docs);
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      console.log(arrOfUser);

  var numberOfAlumni = arrOfUser.length;

  res.render("filterCollegeData", {
    ArrOfUser: arrOfUser,
    NumberOfMembers: numberOfAlumni
  });

      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}
