import { Schema, model } from 'mongoose';

const CoinSchema = new Schema({
    userid: {
        type: String,
        require: true
    },
    coinid: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    period: {
        type: String,
        require: true,
    },
    amount: {
        type: String,
        require: true,
    },
    availability: {
        type: Boolean,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    }

})

const CoinModel = model("CoinData", CoinSchema);

export default CoinModel;