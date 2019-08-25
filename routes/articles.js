//requiring the model from article.js
var Article = require("../models/article")
//requring the express
var express = require("express")
//acessing the routes
var router = express.Router();

//handling the route post request
router.post("/",(req,res) => {
    // console.log("Post the data");
    Article.create(req.body,(err,createduser) => {
        if (err) console.log("error")
       // console.log("Data received")
        res.send(createduser);
    })
})

//handling the get routeS
router.get("/",(req,res) => {
    Article.find({},(err,connected) => {
        console.log(connected);
        if(err) console.log("err")
        res.render("index",{connected})
    })
})
//handling the delete route
router.delete("/:id",(req,res) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err,handled) => {
        if(err) console.log("error");
        res.redirect('/article');
    })
})
//handling the update route
router.put("/:id",(req,res) => {
   var id = req.params.id;
   Article.findByIdAndUpdate(id,(err,updated) => {
       if(err) console.log("error in updating")
       res.redirect("/article")
    })
})
//exporting the route
module.exports = router;