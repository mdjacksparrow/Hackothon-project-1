const mongoose = require("mongoose");

// Establishing connection between server and DB

exports.connect = function() {
  mongoose.connect("mongodb://localhost: 27017/Directorate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
