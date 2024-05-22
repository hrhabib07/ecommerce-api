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

export const orderController = {
  createOrder,
};
