import { Schema, model } from 'mongoose';

const CoinSchema = new Schema({
    userid:{
        type:String,
    },
    coinid: {
        type: Number,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    period: {
        type: String,
    },
    amount: {
        type: String,
    },
    availability: {
        type: String,
    },
    rating: {
        type: Number,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    }

})

const CoinModel = new model(CoinSchema, "CoinData");
export default { CoinModel };