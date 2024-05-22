import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { orders: ordersData } = req.body;
        // call service function
        const result = await productServices.createProductIntoDB(ordersData);
        // send response 
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProductsFromDB();
        // send response 
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}

export const productController = {
    createProduct,
    getAllProducts
}