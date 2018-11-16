

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// require("./page_routing.js")(app);
// require("./api.js")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.get ('/', function (req,res) {
//     console.log(req.param.page);    
//     //res.sendFile(path.join(__dirname, "home.html"))
//   });

// app.get ('*', function (req,res) {
//     return res.send("this is ALL DATA");
//     //res.sendFile(path.join(__dirname, "home.html"))
//   });
// app.get ('/:page', function (req,res) {
//     return res.send("this is home page");
//     //res.sendFile(path.join(__dirname, "home.html"))
//   });

// app.get('/api/:request', function (){
//     return res.json("[]");
// } );


 



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });