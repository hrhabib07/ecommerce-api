import { Request, Response } from "express";
import { orderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
    try {
        const ordersData = req.body;
        // call service function
        const result = await orderServices.createOrderIntoDB(ordersData);
        // send response
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};
const getAllOrder = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        let result;

        if (email) {
            result = await orderServices.findOrdersByEmailFromDB(email);
            res.status(200).json({
                success: true,
                message: `Orders fetched successfully for user email!`,
                data: result,
            });
        } else {
            result = await orderServices.getAllOrderFromDB();
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully!',
                data: result,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching orders.",
        });
    }
}

export const orderController = {
    createOrder,
    getAllOrder
};
