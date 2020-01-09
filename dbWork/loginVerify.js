const mongoose = require("mongoose");
const DB = require("./user_module");
const dbConnection = require("../dbWork/dbConnection");
const url = require('url');

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
  //create connection
  dbConnection.connect();

  var db = mongoose.connection;
  
  var givenEmail = req.body.Email;  
  var givenPassword = req.body.Password;

 
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connection Established !");
    DB.College.find({ email: givenEmail, password : givenPassword }, {}, (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();

        var details = docs;

        if(docs[0] === undefined){
          console.log("Empty list");
          res.render("college_sign_in");
        }else if ((givenEmail === details[0].email) && (givenPassword === details[0].password)) {
          res.redirect(url.format({
           pathname : '/college_controlPanel',
           query : {
            "Cname" : details[0].college
           }
          }));
        } else {
          res.render("college_sign_in");
        }
        console.log("DB connection lost!");
      }
    });
  });
};
