const mongoose = require("mongoose");
const DB = require("./user_module");
const dbConnection = require("../dbWork/dbConnection");
var path = require("path");

var appDir = path.dirname(require.main.filename);

// From Alumni DataBase
exports.findAlumniInfo = function(req,res) {

//Establishing connection 
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


//Search Alumni By Email
exports.findAlumniInfoByEmail = function(alumniEmail, res) {
  //Establishing  connection
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




// Search Alumni by Register for profile updation
exports.findAlumniAndShowParticularInfo = function(req,res) {

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
     
     res.render("alumniUpdateForm", {
       firstName: docs[0].firstName,
       secondName: docs[0].secondName,
       register: alumniReg,
       college : docs[0].college,
       ugYearOfPassing : docs[0].ugYearOfPassing,
       residence : docs[0].residence,
       hometown : docs[0].hometown,
       regNo : docs[0].regNo
     });

      console.log("DB connection lost!");
    }
  });
});
}


// Search Alumni  by Register and Update to DataBase
exports.findAlumniAndUpdate = function(req,res) {

//Establishing  connection 
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

           //Email updation
           if (req.body.email === "") {
             console.log("email empty");
           } else {
              docs[0].email = req.body.email;
              console.log("email updated!");
           }

           // phone number updation
           if (req.body.phoneNo === "") {
             console.log("phoneNo empty");
           } else {
            docs[0].phone = Number(req.body.phoneNo);
            console.log("phoneNo updated!");
          }

           // PG College Name updation
           if (req.body.pgCourseName === "") {
             console.log("pgCollegeName empty");
           } else {
            docs[0].pgCourseName = req.body.pgCourseName;
            console.log("pgCourseName updated!");
           }

           // PG- Year of passing updation 
           if (req.body.pgYearOfPassing === "") {
             console.log("pgYearOfPassing empty");
           } else {
            docs[0].pgYearOfPassing =Number(req.body.pgYearOfPassing);
            console.log("pgYearOfPassing updated!");
           }

           // Research Name updation 
           if (req.body.research === "") {
             console.log("research empty");
           } else {
            docs[0].research = req.body.research;
            console.log("research updated!");
           }

           // Designation Name updation 
          if (req.body.designation === "") {
            console.log("designation empty");
          } else {
            docs[0].designation = req.body.designation;
            console.log('designation updated!');
          }

           // Working company Name updation 
          if (req.body.workingCompany === "") {
            console.log("company name empty");
          } else {
            docs[0].companyName = req.body.workingCompany;
            console.log("company updated!");
          }

          // city Name updation 
          if (req.body.city === "") {
            console.log("city empty");
          } else {
            docs[0].city = req.body.city;
            console.log('city updated!');           
          }

          // Save changes in the document 
          docs[0].save();

          // Return Indication file 

          res.render('success');
           console.log("DB connection lost!");
         }
  });
});
}
