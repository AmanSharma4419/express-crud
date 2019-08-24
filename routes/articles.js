//requiring the model from article.js
var Article = require("../models/article")
//requring the express
var express = require("express")
//acessing the routes
var route = express.Router();

//handling the route post request
route.post("/",(req,res) => {
    // console.log("Post the data");
    Article.create(req.body,(err,createduser) => {
        if (err) console.log("error")
       // console.log("Data received")
        res.send(createduser);
    })
})

//handling the get routeS
route.get("/",(req,res) => {
    Article.find({},(err,connected) => {
        console.log(connected);
        if(err) console.log("err")
        res.render("index",{connected})
    })
})
//handling the delete route
route.delete("/:id",(req,res) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err,handled) => {
        if(err) console.log("error");
        res.redirect('/article');
    })
})
//exporting the route
module.exports = route;