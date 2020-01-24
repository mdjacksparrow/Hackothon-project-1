const mongoose = require("mongoose");
const DB = require("./user_module");
const dbConnection = require("../dbWork/dbConnection");
const findParticularDataInDB = require('../dbWork/findParticularDataInDB');
const UserSchema = require("../dbWork/user_module");
const passport = require('passport');

// FROM Directorate login
exports.checkDirectorateLogin = function(req, res) {
  //create connection
  dbConnection.connect();

  var db = mongoose.connection;

  var givenUsername = req.body.Username;
  var givenPassword = req.body.Password;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connection Established !");
    DB.loginDetail.find({ username: "directorate" }, {}, (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();

        var details = docs;

        console.log(details[0].username);

        if (
          givenUsername === details[0].username &&
          givenPassword === details[0].password
        ) {
          res.redirect("/directorate_control_panel");
        } else {
          res.render("directorateLogin");
        }
        console.log("DB connection lost!");
      }
    });
  });
};

// FROM College login
exports.checkCollegeLogin = function(req, res) {
  
  console.log(req.body);

  const user = new UserSchema.College({
    email: req.body.email,
    password: req.body.password
  });

  UserSchema.College.countDocuments(
    {
      email: req.body.email
    },
    (err, count) => {
      if (count > 0) {
        req.login(user, err => {
          if (err) {
            console.log(err);
            res.redirect("/college_sign_up");
          }

          passport.authenticate("local")(req, res, () => {
            return res.redirect("/college-control-panel");
          });
        });
      } else {
        res.redirect("/college_sign_up");
      }
    }
  );
};

// FROM Alumni login
exports.checkAlumniLogin = function(req, res) {
  //create connection
  dbConnection.connect();

  var db = mongoose.connection;
  
  var givenEmail = req.body.Email;  
  var givenPassword = req.body.Password;
  
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connection Established !");
    DB.Alumni.find({email : givenEmail, password : givenPassword}, {}, (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();

        var details = docs;

        if(docs[0] === undefined){
          console.log("Empty list");
          res.render("alumniSignIn");
        }else if ((givenEmail === details[0].email) && (givenPassword === details[0].password)) {
         
          findParticularDataInDB.findAlumniInfoByEmail(details[0].email,res);

        } else {
          res.render("alumniSignIn");
        }
        console.log("DB connection lost!");
      }
    });
  });
};
