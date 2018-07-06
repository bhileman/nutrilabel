var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

// need to serve up static files middleware   
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendfile("views/landing.html");  
});

app.get("/main.js", function(req, res){
    res.sendfile("views/main.js");  
});


// Tell Express to listen for requests
app.listen(3000, () => console.log('Example app listening on port 3000!'));
 
 
 
// create server side js file that will contain all canvas code as well as DOM elements to update canvas with form inputs