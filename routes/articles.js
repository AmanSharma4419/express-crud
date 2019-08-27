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
// router.get("/",(req,res) => {
//     Article.find({},(err,connected) => {
//         if(err) console.log("err")
//         res.send(connected)
//         //res.render("index",{connected})
//     })
// })
//handling the delete route
router.get("/delete/:id",(req,res) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err,handled) => {
        if(err) console.log("error");
        res.redirect('/article');
    })
})
//handling the update route//


//All routes handled for req comes from browser//
//handled route for the rendring the form.ejs
router.get("/new",(req,res) => {
    res.render("form")
})
//handled route for the submit post req from form.ejs//
router.post("/new",(req,res) => {
    //console.log(req.body);
    Article.create(req.body,(err,submitted) => {
        if(err) console.log("error-while-submitting-form-data")
        res.redirect("/article")
    })
})
//handled route for rendring data in browser//
router.get("/",(req,res) => {
    Article.find({},(err,displayed) => {
        if(err) console.log("error-in-displaying")
        res.render("display",{displayed})
       // res.send("hello")
    })
})

//rendring the edit form
router.get("/:id/edit",(req,res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render("edit", {article});
    });
})

router.post("/:id/edit", (req, res) => {
Article.findByIdAndUpdate(req.params.id, req.body,(err,submitted) => {
    if(err) console.log(error)
    res.redirect("/article")
})
});
//handling the edit route of form//
// router.get('/:id/edit', (req, res) => {
//     // grab the article using id
//     const id = req.params.id;
//     Article.findById(id, (err, article) => {
//         res.render('form', {article});
//     })
// });

// router.post('/:id', (req, res) => {
//     // findByIdandUpdate 

// })
//handling delete route
router.get("/delete/:id", (req, res, next) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err, deletedArticle) => {
        if(err) console.log(err);
        res.render('display', { displayed });
    });
})

router.post("/:id",(req,res) => {
    var id = req.params.id;
    //console.log("founded")
    Article.findByIdAndUpdate(id,(err,updated) => {
        if(err) console.log("error in updating")
        console.log("reached")
        //res.redirect("/article")
     })
 })
//exporting the route
module.exports = router;