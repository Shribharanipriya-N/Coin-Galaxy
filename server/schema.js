const mongoose=require("mongoose")

const Coinsschema=new mongoose.Schema({
    id:{
        type:Number,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    period:{
        type:String,
    },
    
    amount:{
        type: String,
    },
    availability:{
       type:String,
    },
    rating:{
       type:Number,
    },
    image:{
        type: String,
    },
    category:{
        type:String,
    }
})

const Coins=mongoose.model("coindatas",Coinsschema)

module.exports={Coins}


