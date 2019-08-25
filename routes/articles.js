//requiring the model from article.js
var Article = require("../models/article")
//requring the express
var express = require("express")
//acessing the routes
var router = express.Router();
//All postman routes are handled for postman//

//handling the route post request
router.post("/",(req,res) => {
    // console.log("Post the data");
    Article.create(req.body,(err,createduser) => {
        if (err) console.log("error")
       // console.log("Data received")
        res.send(createduser);
    })
})

//handling the get routes
router.get("/",(req,res) => {
    Article.find({},(err,connected) => {
        if(err) console.log("err")
        res.send(connected)
        //res.render("index",{connected})
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
   //console.log("founded")
   Article.findByIdAndUpdate(id,(err,updated) => {
       if(err) console.log("error in updating")
       //console.log("reached")
       //res.redirect("/article")
    })
})
//All routes handled for req comes from browser//
//handled route for the rendring the form.ejs
router.get("/new",(req,res) => {
    res.render("form")
})
//handled route for the submit post req from form.ejs
router.post("/new",(req,res) => {
    console.log(req.body);
    Article.create(req.body,(err,submitted) => {
        if(err) console.log("error-while-submitting-form-data")
        res.send(submitted)
    })
})

//exporting the route
module.exports = router;