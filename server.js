// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require("./user_module");
const dbConnection = require('./dbConnection');

// import express function 
var app = express();

// use modules
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

// Route for root 
app.get('/', (req,res) => {
 res.render('index');
});

// Route for root 
app.post('/', (req,res) => {

 var username = req.body.Username;
 var email = req.body.Email;
 var password = req.body.Password;

 // For reference data 
 var data = req.body;
 console.log(data);

// Create connection between server and DB 
  dbConnection.connect();


var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !"); 

  User.create({
  _username : username,
  _email : email,
  _password : password
 } , (err, docs) => {
  if(err) console.log(err);
  else{
   console.log(docs);
   mongoose.connection.close();
   console.log("DB connection lost!");
  }
 })

});

 res.sendFile(__dirname + "/Success.html");
});


// Route for college 
app.get('/college_sign_in', (req,res) => {
  res.render("college_sign_in");
});

app.get("/college_sign_up", (req, res) => {
  res.render("college_sign_up");
});



// Route for user info 
app.get('/college/controlPanel', (req,res) => {

//create connection 
dbConnection.connect();

var arrOfUser = [];
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  User.find({}, {},
    (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        docs.forEach((user) => {
          // console.log(user);
          arrOfUser.push(user);
        })
        mongoose.connection.close();
        // console.log(arrOfUser);
        
        var user = arrOfUser[0]._username;
        var email = arrOfUser[0]._email;
        var password = arrOfUser[0]._password;

        console.log(user);
        
        var numberOfMembers = arrOfUser.length;

        res.render("controlPanel", { ArrOfUser: arrOfUser, NumberOfMembers : numberOfMembers});

        console.log("DB connection lost!");
      }
    }
  );
});

});
 

// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})