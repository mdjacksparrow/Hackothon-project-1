var mongoose = require('mongoose');
var dbConnectionOfCollegeDB = require('./dbConnectionOfCollegeDB');
var DB = require('./user_module');
var path = require("path");

var appDir = path.dirname(require.main.filename);


exports.createOne = function(req,res){
 
  var data = req.body;
  console.log(data);

// Create connection between server and DB 
dbConnectionOfCollegeDB.connect();

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log(`Connection Established Between College ${dbConnection}`);

  DB.College.create(
    {
      username: data.Username,
      email: data.Email,
      password: data.Password
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();
        console.log("DB connection lost!");
        res.sendFile(appDir + "/Success.html");
      }
    }
  );
});
}


