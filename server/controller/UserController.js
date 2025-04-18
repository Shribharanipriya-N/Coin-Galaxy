import UserModel from "../model/UserModel.js";
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const adduser = async (req, res) => {
    const data = req.body;
    try {
        const olduser = await UserModel.findOne({ email: data.email });
        if (olduser) {
            return res.status(404).json({ message: "User Email Exists" });
        }
        else {
            const user = new UserModel({
                name: data.name,
                email: data.email,
                password: data.password,
                userid: v4(),
            })

            await user.save();
            const token = jwt.sign({ id: user.userid, email: user.email }, "secrettoken", {
                expiresIn: "1h",
            });
            return res.status(200).json({ message: "User Created", token: token });
        }
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

const loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const isvalidPassword = await bcrypt.compare(password, user.password);
        if (!isvalidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user.userid, email: user.email }, "secrettoken", {
            expiresIn: "1h",
        });
        return res.status(200).json({ message: "Login success", token });
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

export { adduser, loginuser };