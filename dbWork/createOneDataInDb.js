var mongoose = require('mongoose');
var dbConnection = require('../dbWork/dbConnection.js');
var DB = require('./user_module');
var path = require("path");

var appDir = path.dirname(require.main.filename);


// SIGN UP FOR NEW COLLEGE 
exports.createNewCollege = function(req,res){
 
  var data = req.body;
  console.log(data);

// Create connection between server and DB 
dbConnection.connect();

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log(`Connection Established Between College ${dbConnection}`);

  DB.College.create(
    {
      college: data.CollegeName,
      email: data.Email,
      password: data.Password
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        res.sendFile(appDir + "/Success.html");
      }
    }
  );

  DB.Directorate.create(
    {
      collegeName : data.CollegeName,
      email : data.Email
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();
        console.log("DB connection lost!");
      }
    }
  );
});
};


// CREATE SIGN UP FOR ALUMNI

exports.createNewAlumni = function(req, res) {
  var data = req.body;
  console.log(data);

  // Create connection between server and DB
  dbConnection.connect();

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log(`Connection Established Between College ${dbConnection}`);

    DB.Alumni.create(
      {
        username: data.Username,
        course: data.Email,
        ugYearOfPassing: Number(data.Year_of_ug),
        college: data.College,
        city: data.City,
        regNo: data.Reg_number,
        password: data.Password,
        firstName: data.First_Name,
        secondName: data.Second_Name,
        phone: data.Phone,
        pgCourse: data.Pg_course,
        pgYearOfPassing: Number(data.Year_of_pg),
        research: data.Research,
        researchYearOfPassing: Number(data.Research_year),
        designation: data.Designation,
        companyName: data.Working_company,
        residence: data.Country_of_residence,
        hometown: data.Home,
        /*BUG later fixed */
        skills: data.skill
      },
      (err, docs) => {
        if (err) console.log(err);
        else {
          console.log(docs);
          res.sendFile(appDir + "/Success.html");
        }
      }
    );
  });
};
