// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
const createOneDataInDb = require('./dbWork/createOneDataInDb');
const checkDataInDB = require('./dbWork/checkDataInDB');
const filter = require('./dbWork/filterDataInDB');

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
  createOneDataInDb.createNewCollege(req,res);
});

// Route for College_control_panel GET
app.get('/college_controlPanel', (req,res) => {
  checkDataInDB.checkDataFromCollege(res);
});

// Route for Directorate sing in GET
// app.get("/directorate_login", (req, res) => {
//   res.redirect("/directorate_control_panel");
// });

// Redirect for College_control_panel GET
app.get('/directorate_control_panel', (req,res) => {
  checkDataInDB.checkDataFromDirectorate(res);
});


// Filter data for BIT calling request
app.get("/5e13750c2d47db0eb4f26657", (req, res) => {
  filter.filterDataFromCollege(
    "University College of Engineering(BIT campus)",
    res
  );
}); 

// Filter data for CEG calling request
app.get("/5e13751f2d47db0eb4f26659", (req, res) => {
  filter.filterDataFromCollege(
    "Anna University(CEG campus)",
    res
  );
}); 



// Route for Alumni Sign In GET 
app.get('/alumni_sign_in', (req, res) => {
  res.render('alumniSignIn');
});


// Route for Alumni Sign Up GET 
app.get("/alumni_sign_up", (req, res) => {

  res.render('alumniSignUp');
});

// Route for Alumni Sign Up POST 
app.post("/alumni_sign_up", (req, res) => {
  createOneDataInDb.createNewAlumni(req, res);
});


// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})