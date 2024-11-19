import { Schema, model } from "mongoose";
const bcrypt=require('bcryptjs');


const UserSchema = new Schema({
    userid: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const UserModel = new model(UserSchema, "Userdata");

module.exports = { UserModel };