var mongoose = require('mongoose');
var dbSchema = require('./user_module');
const passport = require('passport');

// Create sign up for Alumni

exports.createNewAlumni = function(req, res) {
  var data = req.body;
  console.log(data);
  
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

exports.createNewCollege = (req, res) => {
  console.log(req.body);

  dbSchema.College.register(
    { email: req.body.email, collegeName: req.body.collegeName},
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
      }

      passport.authenticate('local')(req, res , () => {
        res.redirect('/college-control-panel');
      });
    }
  );
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