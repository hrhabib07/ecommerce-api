import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post("/orders", productController.createProduct);
// router.get("/orders", productController.createProduct);

export const productRoutes = router;