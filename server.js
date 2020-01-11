// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const createOneDataInDb = require('./dbWork/createOneDataInDb');
const checkDataInDB = require('./dbWork/checkDataInDB');
const filter = require('./dbWork/filterDataInDB');
const loginVerify = require('./dbWork/loginVerify');
const findDataInAlumniDB = require('./dbWork/findParticularDataInDB');

// import express function 
var app = express();

// use express modules
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

// Route for college sign_in POST
app.post('/college_sign_in', (req, res) => {
  loginVerify.checkCollegeLogin(req,res);
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

// Filter data based on Register Number  
app.post("/filter-data-by-regNo", (req, res) => {  
  filter.filterDataFromCollegeByRegNo(req.body.RegNo, res);
});

// Filter data based on Year Of Passing  
app.post("/filter-data-by-YearOfPassing", (req, res) => {
  filter.filterDataFromCollegeByYearOfPassing(req.body.YearOfPassing, res);
}); 

// Filter data based on city  
app.post("/filter-data-by-City", (req, res) => {
  filter.filterDataFromCollegeByCity(req.body.City, res);
}); 

// Filter data based on Subject  
app.post("/filter-data-by-Subject", (req, res) => {  
  filter.filterDataFromCollegeBySubject(req.body.Subject, res);
}); 

// Route for Alumni Sign In GET 
app.get('/alumni_sign_in', (req, res) => {
  res.render('alumniSignIn');
});

// Route for Alumni Sign In POST 
app.post('/alumni_sign_in', (req, res) => {
  loginVerify.checkAlumniLogin(req,res);
});

// Route for Alumni Sign Up GET 
app.get("/alumni_sign_up", (req, res) => {
  res.render('alumniSignUp');
});

// Route for Alumni Sign Up POST 
app.post("/alumni_sign_up", (req, res) => {
  createOneDataInDb.createNewAlumni(req, res);
  // filter.filterDataFromCollegeByRegNo(req.body.RegNo, res);
});

// Route for Alumni Control Panel GET 
app.get('/alumni_control_panel',(req,res) => {
    filter.filterDataFromCollege(req.query.Cname, res);
});

// Route for Alumni Contact Profile GET
app.get('/alumniContactProfile', (req,res) => {
  res.render('alumniContactProfile');
});

// Route for aboutForAlumni POST 
app.post('/aboutForAlumni', (req, res) => {
  findDataInAlumniDB.findAlumniInfo(req,res);
});

// Route Show Alumni Update Form with Particular Info POST
app.post("/alumniUpdateForm", (req, res) => {  
  findDataInAlumniDB.findAlumniAndShowParticularInfo(req,res);
});

// Route Alumni Update Info Route POST
app.post('/alumniUpdateInfo',(req,res) => {
  findDataInAlumniDB.findAlumniAndUpdate(req,res);
});

// Route Event template GET
app.get('/events', (req,res) => {
  checkDataInDB.checkEvents(res);
});

// Route for Event hosting GET
app.get("/eventHost", (req, res) => {
  res.render("eventHost");
});

// Route for Event hosting POST 
app.post("/eventHost", (req, res) => {
  createOneDataInDb.createNewEvent(req,res);
});

// Route for GroupChat GET 
app.get('/groupChat',(req,res) => {
  res.render('groupChat');
});



// Route for posting mail to MailChimp GET
app.get('/postToMailChimp',(req,res) => {
  res.render('postToMailChimp');
});

// Route for posting mail to MailChimp POST
app.post("/postToMailChimp", (req, res) => {


});

// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})

