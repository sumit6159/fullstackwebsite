const Product = require('../models/product.model')
const express = require("express")
const router = express.router()


router.post("/", async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        return res.status(200).json(product)
    }
    catch(err){
        return res.status(400).json(err.message)
    }
})

