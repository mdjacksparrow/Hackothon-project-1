var mongoose = require('mongoose');
var dbConnection = require('../dbWork/dbConnection.js');
var DB = require('./user_module');
var path = require("path");

var appDir = path.dirname(require.main.filename);


// Sign up for new College 
exports.createNewCollege = function(req,res){
 
  var data = req.body;
  console.log(req.body);
  var collegeName = data.CollegeName;
  var email = data.Email;
    
// Create connection between server and DB 
dbConnection.connect();

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log(`Connection Established Between College`);

  // Data inserted into collegedb collection 
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
        res.render('success');
      }
    }
  );

  // Data inserted into DirectorateDb by same registration details given by college registration
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

  // Also Sign to MailChimp API integration 
//     var data = {
//       members: [
//         {
//           email_address: email,
//           status: "subscribed",
//           merge_fields: {
//             FNAME: CollgeName
//           }
//         }
//       ]
//     };

//     var jsonData = JSON.stringify(data);

//     var options = {
//       url: "https://us4.api.mailchimp.com/3.0/lists/7dc64fbc6b",
//       method: "POST",
//       headers: {
//         Authorization: "Mdjack 9fcc2a1c44a9ad9e0978c7853c5b7762-us4"
//       },
//       body: jsonData
//     };

//     request(options, (error, response, body) => {
//       if (error) {
//         // res.render("failure");
//         console.log("Failure to Integrate");
        
//       } else {
//         if (response.statusCode === 200) {
//           // res.render("success");
//           console.log("Success to Integrate MailChimp");
//         } else {
//           // res.render("failure");
//           console.log("Failure to Integrate");
//         }
//       }
//     });

});
};


// Create sign up for Alumni

exports.createNewAlumni = function(req, res) {
  var data = req.body;
  console.log(data);

  // Establishing connection between server and DB
  dbConnection.connect();

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log(`Connection Established Between College DB`);

    DB.Alumni.create(
      {
        username: data.Username,
        course: data.Ug_course,
        email : data.Email,
        ugYearOfPassing: Number(data.Year_of_ug),
        college: data.College,
        city: data.City,
        regNo: data.regNo,
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
        //BUG later fixed 
        skills: data.skill
      },
      (err, docs) => {
        if (err) console.log(err);
        else {
          console.log(docs);
          res.render('success');
        }
      }
    );
  });
};



// Posting Event details

exports.createNewEvent = function(req, res) {
  var data = req.body;
  console.log(data);

  // Establishing   connection between server and DB
  dbConnection.connect();

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log(`Connection Established Between College ${dbConnection}`);

    DB.Event.create(
      {
        college : req.body.collegeName,
        title : req.body.eventTitle,
        content : req.body.eventMessage
      },
      (err, docs) => {
        if (err) console.log(err);
        else {
          console.log(docs);
          res.render('success');
        }
      }
    );
  });
};