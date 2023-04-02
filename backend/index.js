const express = require("express");
const { connection } = require("./db");
const { productRoute } = require("./route/product.route");
const cors = require("cors");
const { userRoute } = require("./route/user.route");
const { sellerRoute } = require("./route/bestseller.route");
const { comboRoute } = require("./route/combo.route");

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user",userRoute);
app.use("/iftar",productRoute);
app.use("/seller",sellerRoute)
app.use("/combo",comboRoute)


app.listen(process.env.PORT,async()=>{
   try {
    await connection
    console.log("connected to db");
   } catch (error) {
    console.log(error);
   }
   console.log("server is running");
})