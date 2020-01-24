const mongoose = require("mongoose");

// Establishing connection between server and DB

exports.connect = function() {
  mongoose.connect("mongodb://localhost/Directorate", { useNewUrlParser: true, useUnifiedTopology : true 
});
  mongoose.set('useCreateIndex', true);
};
// "mongodb+srv://Mdjack:jack@cluster0-atf8h.mongodb.net/Directorate",
// userUnifiedTopology
