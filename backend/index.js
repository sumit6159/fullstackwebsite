const express = require("express")
const app = require("./app");


require("dotenv").config()
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }

const connect = require('./config/db')

const PORT = process.env.PORT || 4225


app.listen(PORT, async()=>{
    try{
        await connect()
        console.log(`listening on ${PORT}`)
    }
    catch(err){
        console.log("error:", err)
    }
})