const mongoose = require('mongoose');
const DB = require('./user_module');
const dbConnection = require('../dbWork/dbConnection');

// FROM Directorate 
exports.checkDataFromDirectorate = function(res) {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Directorate.find({}, {}, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      var numberOfMembers = arrOfUser.length;

      res.render("directoratecontrolPanel", {
        ArrOfUser: arrOfUser,
        NumberOfMembers: numberOfMembers
      });

      console.log("DB connection lost!");
    }
  });
});
}


// FROM College DB
exports.checkDataFromCollege = function(res) {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({}, {}, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      var numberOfMembers = arrOfUser.length;

      res.render('collegecontrolPanel' , {
        ArrOfUser: arrOfUser,
        NumberOfMembers: numberOfMembers
      });

      console.log("DB connection lost!");
    }
  });
});
}



// Check all events in events collection 
exports.checkEvents = function(res) {

//create connection 
dbConnection.connect();

var arrOfEvents = [];
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Event.find({}, {}, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      docs.forEach(event => {
        arrOfEvents.push(event);
      });
      mongoose.connection.close();

      var numberOfEvents = arrOfEvents.length;

      res.render('eventTemplate' , {
        ArrOfEvents: arrOfEvents,
        NumberOfEvents: numberOfEvents
      });

      console.log("DB connection lost!");
    }
  });
});
}