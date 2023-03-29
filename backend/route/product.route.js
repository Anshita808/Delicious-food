const express = require("express");
const {ProductModel}=require("../model/product.model");
const productRoute = express.Router();

productRoute.get("/",async(req,res)=>{
    try {
        const product = await ProductModel.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({"msg":"Something went wrong"});
    }
})

productRoute.post("/add",async(req,res)=>{
    const data = new ProductModel(req.body)
    await data.save()
    res.status(200).send({"msg":"data send"})
})

module.exports={
    productRoute
}