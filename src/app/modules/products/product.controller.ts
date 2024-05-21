import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        // call service function
        const result = await productServices.createProductIntoDB(product);
        // send response 
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
        })
    } catch (error) {
        console.log(error);
    }
};

export const productController = {
    createProduct
}