const mongoose = require('mongoose');
const User = require('./user_module');
const dbConnection = require('./dbConnection');


exports.checkData = function(res) {

//create connection 
dbConnection.connect();


var arrOfUser = [];
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  User.find({}, {}, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log(docs);
      docs.forEach(user => {
        arrOfUser.push(user);
      });
      mongoose.connection.close();

      var numberOfMembers = arrOfUser.length;

      res.render("controlPanel", {
        ArrOfUser: arrOfUser,
        NumberOfMembers: numberOfMembers
      });

      console.log("DB connection lost!");
    }
  });
});


}