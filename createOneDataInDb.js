var mongoose = require('mongoose');
var dbConnection = require('./dbConnection');
var User = require('./user_module');

exports.createOne = function(dataSet,req,res){
 
  var data = req.body;
  console.log(data);

// Create connection between server and DB 
dbConnection.connect();

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connection Established !");

  User.create(
    {
      _username: dataSet.Username,
      _email: dataSet.Email,
      _password: dataSet.Password
    },
    (err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        mongoose.connection.close();
        console.log("DB connection lost!");
        res.sendFile(__dirname + "/Success.html");
      }
    }
  );
});
}


