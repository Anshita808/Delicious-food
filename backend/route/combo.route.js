const express = require("express");
const {ComboModel}=require("../model/combo.model");
const comboRoute = express.Router();

comboRoute.get("/",async(req,res)=>{
    try {
        const product = await ComboModel.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({"msg":"Something went wrong"});
    }
})

comboRoute.post("/add",async(req,res)=>{
    const data = new ComboModel(req.body)
    await data.save()
    res.status(200).send({"msg":"data send"})
})

module.exports={
    comboRoute
}