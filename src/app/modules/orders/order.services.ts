import { Order } from "./order.interface";
import { OrderModel } from "./orders.model";

const createOrderIntoDB = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
};
const getAllOrderFromDB = async () => {
    const result = await OrderModel.find();
    return result;
};

const findOrdersByEmailFromDB = async (email: string) => {
    const result = await OrderModel.find({ email: { $regex: email, $options: 'i' } });
    return result;
};

export const orderServices = {
    createOrderIntoDB,
    getAllOrderFromDB,
    findOrdersByEmailFromDB
};
