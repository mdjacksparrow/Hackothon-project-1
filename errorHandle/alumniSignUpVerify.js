var mongoose = require("mongoose");
var dbConnection = require("../dbWork/dbConnection.js");
var DB = require("../dbWork/user_module");

//  Directorate -Search by Register number
exports.filterDataFromCollegeByRegNo = function(RegNo, res) {
  //create connection
  dbConnection.connect();

  var arrOfUser = [];
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connection Established !");

    DB.Alumni.find(
      { regNo: RegNo },
      "firstName secondName ugYearOfPassing city regNo",
      (err, docs) => {
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
      }
    );
  });
};
