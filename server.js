// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
const createOneDataInDb = require('./dbWork/createOneDataInDb');
const checkDataInDB = require('./dbWork/checkDataInDB');
const filter = require('./dbWork/filterDataInDB');
const loginVerify = require('./dbWork/loginVerify');
const findDataInAlumniDB = require('./dbWork/findParticularDataInDB');

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
  res.render('college_sign_in');
});

app.post('/college_sign_in', (req, res) => {
  loginVerify.checkCollegeLogin(req,res);
})

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

  filter.filterDataFromCollege(req.query.Cname, res);

});

// Route for Directorate sign in GET 
app.get("/directorate_login", (req, res) => {
  res.render('directorateLogin');
});

// Route for Directorate sign in POST
app.post("/directorate_login", (req, res) => {
  loginVerify.checkDirectorateLogin(req,res);
});

// Redirect for College_control_panel GET
app.get('/directorate_control_panel', (req,res) => {
  checkDataInDB.checkDataFromDirectorate(res);
});


// Filter data for BIT calling request
app.post("/filter-data", (req, res) => {
  filter.filterDataFromCollege(req.body.Cname, res);
}); 

app.post("/filter-data-by-regNo", (req, res) => {
  console.log(req.body);
  
  filter.filterDataFromCollegeByRegNo(req.body.RegNo, res);
}); 

app.post("/filter-data-by-YearOfPassing", (req, res) => {
  filter.filterDataFromCollegeByYearOfPassing(req.body.YearOfPassing, res);
}); 

app.post("/filter-data-by-City", (req, res) => {
  filter.filterDataFromCollegeByCity(req.body.City, res);
}); 

app.post("/filter-data-by-Subject", (req, res) => {
  console.log(req.body);
  
  filter.filterDataFromCollegeBySubject(req.body.Subject, res);
}); 

// Route for Alumni Sign In GET 
app.get('/alumni_sign_in', (req, res) => {
  res.render('alumniSignIn');
});

// Route for Alumni Sign In GET 
app.post('/alumni_sign_in', (req, res) => {

  console.log(req.body);
  loginVerify.checkAlumniLogin(req,res);
});


// Route for Alumni Sign Up GET 
app.get("/alumni_sign_up", (req, res) => {
  res.render('alumniSignUp');
});

app.get('/alumni_control_panel',(req,res) => {
    filter.filterDataFromCollege(req.query.Cname, res);
});

// Route for Alumni Sign Up POST 
app.post("/alumni_sign_up", (req, res) => {
  createOneDataInDb.createNewAlumni(req, res);
});

app.get('/alumniContactProfile', (req,res) => {
  res.render('alumniContactProfile');
});

app.post('/aboutForAlumni', (req, res) => {
  console.log(req.body);
  
  findDataInAlumniDB.findAlumniInfo(req,res);
});

app.get('/alumniUpdateForm', (req,res) => {
  res.render('alumniUpdateForm');
});


// Event template GET
app.get('/events', (req,res) => {
  res.render('eventTemplate');
});

// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})

