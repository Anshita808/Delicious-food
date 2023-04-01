const express = require("express");
const {BestsellerModel}=require("../model/bestseller.model");
const sellerRoute = express.Router();

sellerRoute.get("/",async(req,res)=>{
    try {
        const product = await BestsellerModel.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({"msg":"Something went wrong"});
    }
})
sellerRoute.get("/search",async(req,res)=>{
   try{
     const {q} = req.query
    const product = await BestsellerModel.find({title:{$regex:q,$options:"i"}})
    res.status(200).send(product);
} catch (error) {
    res.status(400).send({"msg":"Something went wrong"});
}
})

sellerRoute.post("/add",async(req,res)=>{
    const data = new BestsellerModel(req.body)
    await data.save()
    res.status(200).send({"msg":"data send"})
})

module.exports={
    sellerRoute
}