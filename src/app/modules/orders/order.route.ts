import { orderController } from "./order.controller";
import express from "express";
const router = express.Router();
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getAllOrder);

export const orderRouter = router;
