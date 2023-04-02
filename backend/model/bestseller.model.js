const mongoose = require("mongoose");

const bestSchema = mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
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
{versionKey:false}
)

const BestsellerModel = mongoose.model("bestseller",bestSchema)

module.exports={
    BestsellerModel
}