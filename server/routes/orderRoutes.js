import express from "express";
const Router = express();
import auth from "../middleware/auth.js";
import { makeorder, makesingleorder, getallorder, getorder } from "../controller/OrderController.js";
Router.get("/order", auth, getallorder);
Router.get("/order/:id", auth, getorder);
Router.post("/orders", auth, makeorder);
Router.post("/order", auth, makesingleorder);

export default Router;