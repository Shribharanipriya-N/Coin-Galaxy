import express from "express";
const Router = express.Router();

import { addcoin, updatecoin, deletecoin, getallcoin, getcoin, getcoinofuser } from '../controller/CoinController.js';
import auth from '../middleware/auth.js';

Router.get("/coin", auth, getallcoin);
Router.get("/coin/:id", auth, getcoin);
Router.post("/coin", auth, addcoin);
Router.put("/coin/:id", auth, updatecoin);
Router.delete("/coin/:id", auth, deletecoin);
Router.get("/coins", auth, getcoinofuser);

export default Router;