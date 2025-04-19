import express from "express";
const Router = express();
import auth from "../middleware/auth.js";
import { getcart, addcart, deletecart, deleteentirecart } from "../controller/CartController.js";
Router.get("/cart", auth, getcart);
Router.post("/cart", auth, addcart);
Router.delete("/cart/:id", auth, deletecart);
Router.delete("/cart", auth, deleteentirecart);

export default Router;