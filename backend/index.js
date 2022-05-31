const express = require("express")
const app = express()

require("dotenv").config()


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