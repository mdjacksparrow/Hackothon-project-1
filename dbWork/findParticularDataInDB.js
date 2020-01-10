const mongoose = require("mongoose");
const DB = require("./user_module");
const dbConnection = require("../dbWork/dbConnection");

// FROM Alumni DB 
exports.findAlumniInfo = function(req,res) {

//create connection 
dbConnection.connect();

let alumniReg = req.body.regNo;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  DB.Alumni.find({regNo : alumniReg},{}, (err, docs) => {
    if (err) console.log("error occured");
    else {
      console.log(docs);

      mongoose.connection.close();
     console.log(docs.regNo);
     
     res.render("aboutForAlumniProfile", {
       name: `${docs.firstName} ${docs.secondName}`,
       city: docs.city,
       email: docs.email,
       phone: docs.phone,
       register: docs.regNo
     });

      console.log("DB connection lost!");
    }
  });
});
}


// Finding alumni By using EMAIL 
exports.findAlumniInfoByEmail = function(alumniEmail, res) {
  //create connection
  dbConnection.connect();

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connection Established !");

    DB.Alumni.findOne({ email: alumniEmail }, {}, (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);

        mongoose.connection.close();

        res.render("aboutForAlumniProfile", {
          name: `${docs.firstName} ${docs.secondName}`,
          city: docs.city,
          email: docs.email,
          phone: docs.phone,
          register : docs.regNo
        });

        console.log("DB connection lost!");
      }
    });
  });
};