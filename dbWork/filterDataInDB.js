const mongoose = require('mongoose');
const DB = require('./user_module');
const dbConnection = require('../dbWork/dbConnection');
var path = require("path");

var appDir = path.dirname(require.main.filename);

// FROM Directorate 
exports.filterDataFromCollege = function(collegeName,res) {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({ college : collegeName },'firstName secondName ugYearOfPassing city regNo' , (err, docs) => {
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

      // res.redirect(appDir + "/Success.html");
      console.log("filter end");
      console.log("DB connection lost!");

    }
  });
});
}



