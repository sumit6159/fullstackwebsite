
  
const mongoose = require('mongoose')
require("dotenv").config()

 const connect = ()=>{
    mongoose.connect("mongodb+srv://sumit:sumit@cluster0.hqmjr.mongodb.net/e-commerce?retryWrites=true&w=majority", {
        useNewUrlParser:true
    })
}

module.exports = connect