import { v4 } from 'uuid';
import CoinModel from '../model/CoinModel.js'

const addcoin = async (req, res) => {
    console.log(req.user);
    const userid = req.user.id;
    const data = req.body;
    try {
        const newcoin = new CoinModel({
            userid: userid,
            coinid: v4(),
            title: data.title,
            description: data.description,
            period: data.period,
            amount: data.amount,
            availability: data.availability,
            rating: data.rating,
            image: data.image,
            category: data.category

        });
        await newcoin.save();
        return res.status(200).json({ message: "Coin added" });
    }
    catch (e) {
        return res.status(500).json(e.message);
    }

}

const updatecoin = async (req, res) => {
    const coinid = req.params.id;
    const data = req.body;

    try {
        const coin = await CoinModel.findOne({ coinid: coinid });
        if (!coin) {
            return res.status(404).json({ message: "No coin found" });
        }

        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                coin[key] = data[key];
            }
        });

        await coin.save();
        return res.status(200).json({ message: "Coin detail updated" });

    } catch (e) {
        return res.status(500).json(e.message);
    }
};


const deletecoin = async (req, res) => {
    const coinid = req.params.id;
    try {
        const coin = await CoinModel.findOneAndDelete({ coinid: coinid });
        if (coin) {
            return res.status(200).json({ message: "Coin deleted" });
        }
        else {
            return res.status(404).json({ message: "No coin found" });
        }
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

const getallcoin = async (req, res) => {
    try {
        const coins = await CoinModel.find();
        return res.status(200).json({ coins, message: "Coins fetched" });
    }
    catch (e) {
        return res.status(500).json(e);
    }
}


const getcoin = async (req, res) => {
    const coinid = req.params.id;
    try {
        const coin = await CoinModel.findOne({ coinid: coinid });
        if (coin) {
            return res.status(200).json({ coin, message: "Details fetched" });
        }
        return res.status(404).json({ message: "Coin not found" });
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
}

const getcoinofuser = async (req, res) => {
    const userid = req.user.id;
    try {
        const coins = await CoinModel.find({ userid: userid });
        return res.status(200).json({ coins, message: "Details fetched" });
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

export { addcoin, updatecoin, deletecoin, getallcoin, getcoin, getcoinofuser };