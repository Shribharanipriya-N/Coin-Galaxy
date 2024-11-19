import { Schema,model } from "mongoose";

const OrderSchema= new Schema({
    orderid:{
        type:String,
        required:true,
    },
    userid:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    delDate:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,

    },
    orderStatus:{
        type:String,

    },
    products:[{
        coinid:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }]

},{timestamps:true})

const OrderModel= new model(OrderSchema,"Orderdata");
module.exports={OrderModel};