import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    coins: [{
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

const CartModel = model("CartData", CartSchema);
export default CartModel;