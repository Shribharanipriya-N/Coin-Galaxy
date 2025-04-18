import Order from '../model/OrderModel.js';
import Cart from '../model/CartModel.js';
import Coin from '../model/CoinModel.js'
import { v4 } from 'uuid';

const makeorder = async (req, res) => {
    const userid = req.user.id;
    const email = req.user.email;
    const { name, phone, address } = req.body;
    let orderDate = new Date().toLocaleDateString("de-DE");
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10);
    let delDate = currentDate.toLocaleDateString("de-DE");
    const orderStatus = "completed";
    try {
        const cart = await Cart.findOne({ userid });
        if (cart) {
            let subtotal = 0
            await Promise.all(
                cart.coins.map(async (item) => {
                    const coin = await Coin.findOne({ coinid: item.coinid });
                    subtotal += coin.price * item.quantity
                })
            );
            const order = new Order({ coinid: v4(), userid, email, name, phone, address, orderDate, delDate, amount: subtotal, orderStatus, coins: cart.coins });
            await order.save();
            await Cart.deleteOne({ userid });
            res.status(200).json({ message: "Order Placed..." });
        } else {
            res.status(404).json({ message: "No Coins found" });
        }
    } catch (e) {
        res.status(404).send({ error: e, message: "Can't place order" });
    }

}


const getorder = async (req, res) => {
    const userid = req.user.id;
    const orderDetails = await Order.find({ userid });
    const allcoins = [];
    for (const order of orderDetails) {
        for (const coin of order.coins) {
            const coinDetails = await Coin.findOne({ coinid: coin.coinid });
            if (coinDetails) {
                allcoins.push({
                    coinid: coin.coinid,
                    quantity: coin.quantity,
                    delDate: order.delDate,
                    title: coinDetails.title,
                    price: coinDetails.price,
                    image: coinDetails.image
                });
            } else {
                console.error("coin not found");
            }
        }
    }
    console.log(orderDetails);
}

export { makeorder, getorder };