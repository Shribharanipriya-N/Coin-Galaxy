import express from "express";
const Router = express.Router();
import { loginuser, adduser } from "../controller/UserController.js"

Router.post("/signin", loginuser);
Router.post("/signup", adduser);

export default Router;