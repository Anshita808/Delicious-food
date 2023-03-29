const {UserModel} = require("../model/user.model");
const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.post("/register",async(req,res)=>{
    const {name,email,password} = req.body
    try {
        const isEmail = await UserModel.findOne({ email });
    if (isEmail) {
      res.status(400).send({ msg: "User is already registered" });
    }
        const user = new UserModel({name,email,password})
        await user.save()
        res.status(200).send({"msg":"User Registration Sucessful"});
    } catch (error) {
        res.status(400).send({"msg":"User Registration has been failed"});
    }
})

module.exports={
    userRoute
}