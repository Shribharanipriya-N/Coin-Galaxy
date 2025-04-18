import Cart from '../model/CartModel.js';
import Coin from '../model/CoinModel.js'

const addcart = async (req, res) => {

    const { coinid, quantity } = req.body;
    const userid = req.user.id;
    if (!coinid || !userid || quantity == null) {
        return res.status(401).send({ message: "Cannot add item, missing data." });
    }
    try {
        const cart = await Cart.findOne({ userid });

        if (cart) {
            const oldcoin = cart.coins.find(c => c.coinid === coinid);
            if (oldcoin) {
                oldcoin.quantity += quantity;
                await cart.save();
                return res.status(200).send({ message: "Item quantity updated." });
            } else {
                cart.coins.push({ coinid, quantity });
                await cart.save();
                return res.status(200).send({ message: "Item added to cart." });
            }
        } else {
            const newCart = new Cart({ userid, coins: [{ coinid, quantity }] });
            await newCart.save();
            return res.status(200).send({ message: "New cart created." });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).send({ error: "An error occurred." });
    }
};




const getcart = async (req, res) => {
    const userid = req.user.id;
    console.log(userid);
    try {
        const cart = await Cart.findOne({ userid });
        console.log(cart);
        if (cart) {
            let subtotal = 0
            const coinDetails = await Promise.all(
                cart.coins.map(async (item) => {
                    const coin = await Coin.findOne({ coinid: item.coinid });
                    subtotal += coin.price * item.quantity
                    return {
                        id: coin.id,
                        title: coin.title,
                        description: coin.description,
                        image: coin.image,
                        price: coin.price,
                        quantity: item.quantity
                    };

                })
            );
            res.status(200).send({ coinDetails, subtotal });
        } else {
            res.status(200).send({ message: "No items found", coinDetails: [] });
        }
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
};
const deletecart = async (req, res) => {
    const coinid = req.params;
    const userid = req.user.id;
    console.log(coinid, userid)
    try {
        const cart = await Cart.findOne({ userid });
        if (cart) {
            const coin = cart.coins.findIndex(c => c.coinid === coinid);
            console.log(coin);
            if (coin > -1) {
                cart.coins.splice(coin, 1);
                if (cart.coins.length > 0) {
                    await cart.save();
                } else {
                    await Cart.deleteOne({ userid });
                }
                res.send({ message: "coin removed from cart" });
            } else {
                res.send({ message: "Item not found" });
            }
        } else {
            res.send({ message: "No coins found" });
        }

    }
    catch (e) {
        console.log(e);
    }

}




export { addcart, getcart, deletecart };