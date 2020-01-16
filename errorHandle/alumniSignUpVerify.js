var mongoose = require("mongoose");
var dbConnection = require("../dbWork/dbConnection.js");
var DB = require("../dbWork/user_module");
const createOneDataInDb = require("../dbWork/createOneDataInDb");

//  Directorate -Search by Register number
exports.filterDataFromCollegeByRegNo = function(req,res,RegNo) {
  //create connection
  dbConnection.connect();

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
          console.log(docs);

          if(docs[0] === undefined){
            createOneDataInDb.createNewAlumni(req,res);
          }else{
            res.render('failure',
            {
              errorMessage : "Register Number Already Existed!"
            });
          }
        }
      }
    );
  });
};
