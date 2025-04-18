import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    orderid: {
        type: String,
        require: true,
        unique: true
    },
    userid: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    delDate: {
        type: Date,
        require: true
    },
    amount: {
        type: Number,

    },
    orderStatus: {
        type: String,

    },
    products: [{
        coinid: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        }
    }]

}, { timestamps: true })

const OrderModel = model("OrderData", OrderSchema);

export default OrderModel;