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
     console.log(docs[0].email);
     
     res.render("aboutForAlumniProfile", {
       name: `${docs[0].firstName} ${docs[0].secondName}`,
       city: docs[0].city,
       email: docs[0].email,
       phone: docs[0].phone,
       register: alumniReg
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