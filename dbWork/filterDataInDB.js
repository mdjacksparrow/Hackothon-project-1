const mongoose = require('mongoose');
const DB = require('./user_module');
const dbConnection = require('../dbWork/dbConnection');

// FROM Directorate By using college name
exports.filterDataFromCollege = function(collegeName,res) {

//create connection 
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

// FROM Directorate By using Register number
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


// FROM College By using Year Of Passing
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


// FROM College By using Year Of Passing
exports.filterDataFromCollegeByCity = function(City,res) {

//create connection 
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


// FROM College By using Subject
exports.filterDataFromCollegeBySubject = function(Subject,res) {

//create connection 
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
