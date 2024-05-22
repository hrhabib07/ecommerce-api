import { orderController } from "./order.controller";
import express from "express";
const router = express.Router();
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getAllOrder);
// Catch-all middleware to handle unmatched routes
router.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
export const orderRouter = router;
