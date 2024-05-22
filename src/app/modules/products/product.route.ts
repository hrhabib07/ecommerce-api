import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getASingleProduct);
router.put("/products/:productId", productController.updateASingleProduct);
router.delete("/products/:productId", productController.deleteASingleProduct);
export const productRoutes = router;
