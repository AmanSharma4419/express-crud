// require express
var express = require("express")

// initlise express
var app  = express(); 

// requiring the mongoose
var mongoose = require("mongoose")

//requring the route
var route = require("./routes/articles")

//requiring the path module
var path = require("path")

// handling the port of server
const PORT = 3000;

// connecting with the monogdb database
mongoose.connect("mongodb://localhost/articleData",{useNewUrlParser:true},(err) => {
    err ? console.log(err) : console.log("mongodb connected")
});

//adding the middle-wares
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//providing the path to view
app.set("views",path.join( __dirname,"views"))

//implementing the ejs engine
app.set("view engine", "ejs")
//sending the request to the routes 
app.use("/article",route)

// listening the server
app.listen(PORT,() => {
    console.log("server is started at port", PORT);
})
