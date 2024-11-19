import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    products: [{
        coindid: {
            type: String,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        }
    }]
})

const CartModel = new model(CartSchema, "Cartdata");

module.exports = { CartModel };