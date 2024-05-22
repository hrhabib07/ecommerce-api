import { Order } from "./order.interface";
import { OrderModel } from "./orders.model";

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
