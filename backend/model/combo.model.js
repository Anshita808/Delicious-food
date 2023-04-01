const mongoose = require("mongoose");

const comboSchema = mongoose.Schema({
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

const ComboModel = mongoose.model("combo",comboSchema)

module.exports={
    ComboModel
}