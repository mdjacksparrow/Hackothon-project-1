// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const DB = require("./dbWork/user_module");
// const dbConnection = require('./dbWork/dbConnection');
const createOneDataInDb = require('./dbWork/createOneDataInDb');
const checkDataInDB = require('./dbWork/checkDataInDB');

console.log(DB);

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
  checkDataInDB.checkData(res);
});
 

// Create server listen port: 4000
app.listen(process.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})