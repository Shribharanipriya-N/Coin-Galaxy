import Order from '../model/OrderModel.js';
import Cart from '../model/CartModel.js';
import Coin from '../model/CoinModel.js'
import { v4 } from 'uuid';


const makesingleorder = async (req, res) => {
    const userid = req.user.id;
    const email = req.user.email;
    console.log(userid, email)
    const { name, phone, address, coinid, quantity } = req.body;
    const orderDate = new Date();
    const delDate = new Date();
    delDate.setDate(orderDate.getDate() + 10);

    const orderStatus = "completed";

    try {
        const coin = await Coin.findOne({ coinid: coinid });
        console.log(coin);
        if (coin) {
            const order = new Order({ orderid: v4(), userid, email, name, phone, address, orderDate, delDate, amount: coin.amount, orderStatus, products: [{ coinid: coinid, quantity: quantity }] });
            console.log(order);
            await order.save();
            return res.status(200).json({ message: "Order placed" });
        }
        else
            return res.status(400).json({ message: "No coin found" });
    }
    catch (e) {
        return res.status(404).send({ error: e.message, message: "Can't place order" });
    }

}
const makeorder = async (req, res) => {
    const userid = req.user.id;
    const email = req.user.email;
    const { name, phone, address } = req.body;
    const orderDate = new Date();
    const delDate = new Date();
    delDate.setDate(orderDate.getDate() + 10);

    const orderStatus = "completed";
    try {
        const cart = await Cart.findOne({ userid });
        console.log(cart);
        if (cart) {
            let subtotal = 0
            await Promise.all(
                cart.coins.map(async (item) => {
                    const coin = await Coin.findOne({ coinid: item.coinid });
                    subtotal += coin.amount * item.quantity
                })
            );
            console.log(subtotal);
            const order = new Order({ orderid: v4(), userid, email, name, phone, address, orderDate, delDate, amount: subtotal, orderStatus, products: cart.coins });
            await order.save();
            await Cart.deleteOne({ userid });
            res.status(200).json({ message: "Order Placed..." });
        } else {
            res.status(404).json({ message: "No Coins found" });
        }
    } catch (e) {
        res.status(404).send({ error: e.message, message: "Can't place order" });
    }

}


const getallorder = async (req, res) => {
    const userid = req.user.id;
    try {
        const orderDetails = await Order.find({ userid });
        if (orderDetails) {
            return res.status(200).json(orderDetails);
        }
        else return res.status(404).json({ message: "No orders found" });
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({ error: e.message, message: "Failed to fetch orders" });
    }
}

const getorder = async (req, res) => {
    const userid = req.user.id;
    const orderid = req.params.id;

    try {
        const order = await Order.findOne({ userid, orderid: orderid });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        const coins = await Promise.all(
            order.products.map(async (coin) => {
                const coinDetails = await Coin.findOne({ coinid: coin.coinid });
                if (coinDetails) {
                    return {
                        coinid: coin.coinid,
                        quantity: coin.quantity,
                        delDate: order.delDate,
                        orderDate: order.orderDate,
                        title: coinDetails.title,
                        price: coinDetails.price,
                        image: coinDetails.image
                    };
                }
            })
        );

        res.status(200).json({
            orderid: order.coinid,
            name: order.name,
            email: order.email,
            phone: order.phone,
            address: order.address,
            orderDate: order.orderDate,
            delDate: order.delDate,
            amount: order.amount,
            coins: coins.filter(Boolean)
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message, message: "Failed to fetch the order" });
    }
};



export { makeorder, getorder, getallorder, makesingleorder };