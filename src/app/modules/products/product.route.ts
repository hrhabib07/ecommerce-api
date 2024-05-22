import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getASingleProduct);

export const productRoutes = router;