// requring the mongoose in artile file
var mongoose = require("mongoose");

//accesing the schema from mongoose
var schema = mongoose.Schema;

//making the schema 
var articleschema = new schema({
    name: String,
    email: String,
    age:{
    type: Number,
    required: true
    },
    hobby:{
    type: String
    }
},{timestamps: true})

// making the model for schema
var Article = mongoose.model("articleschema", articleschema)

// exporting the article schema  model 
module.exports = Article;