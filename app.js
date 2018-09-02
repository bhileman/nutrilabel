var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    helmet = require('helmet');

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet())

app.get("/", function(req, res){
    res.sendFile('views/landing.html' , { root : __dirname});
  });

app.get("/supplement", function(req, res){
    res.sendFile('views/supplement.html' , { root : __dirname});
  });

/*
app.get("/main.js", function(req, res){
    res.sendfile("views/main.js");  
});
*/

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
 
 
 
// create server side js file that will contain all canvas code as well as DOM elements to update canvas with form inputs