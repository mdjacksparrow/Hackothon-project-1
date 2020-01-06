// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
const createOneDataInDb = require('./dbWork/createOneDataInDb');
const checkDataInDB = require('./dbWork/checkDataInDB');

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

// Route for college sign_in GET
app.get('/college_sign_in', (req,res) => {
  res.redirect('/college_controlPanel');
});

// Route for college sign_up GET
app.get("/college_sign_up", (req, res) => {
  res.render("college_sign_up");
});

// Route for college sign_up POST 
app.post('/college_sign_up' , (req, res) => {
  createOneDataInDb.createOne(req,res);
});

// Route for College_control_panel GET
app.get('/college_controlPanel', (req,res) => {
  checkDataInDB.checkData("collegecontrolPanel",res);
});

// Route for Directorate sing in GET
// app.get("/directorate_login", (req, res) => {
//   res.redirect("/directorate_control_panel");
// });


// Redirect for College_control_panel GET
app.get('/directorate_control_panel', (req,res) => {
  checkDataInDB.checkData("directoratecontrolPanel",res);
});


// Sample api calling request
// app.get('/sample-api', (req,res) => {
//   res.json({
//     text : "lorem ipsumlsajflsjf slfdkjas fla lj sa sjf lskjaf ls fajf !"
//   });
// }); 
 

// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})