import { Request, Response } from "express";
import { orderServices } from "./order.services";
import { orderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const ordersData = req.body;
    // validation using zod
    const zodParsedOrder = orderValidationSchema.parse(ordersData);
    // call service function
    const result = await orderServices.createOrderIntoDB(zodParsedOrder);
    // send response
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
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
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching orders.",
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
