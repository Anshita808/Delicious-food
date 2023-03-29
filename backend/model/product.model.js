const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    
grams:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    }
},
{VersionKey:false}
)

const ProductModel = mongoose.model("product",productSchema)

module.exports={
    ProductModel
}