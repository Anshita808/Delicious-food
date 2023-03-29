const mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect(process.env.URL);


module.exports={
    connection
}