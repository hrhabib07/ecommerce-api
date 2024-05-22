import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getASingleProduct);
router.put("/products/:productId", productController.updateASingleProduct);
router.delete("/products/:productId", productController.deleteASingleProduct);
// Catch-all middleware to handle unmatched routes
router.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
export const productRoutes = router;
