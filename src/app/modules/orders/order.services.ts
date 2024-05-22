import { ProductModel } from "../products/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./orders.model";

const createOrderIntoDB = async (order: Order) => {
  const product = await ProductModel.findById(order.productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (order.quantity > product.inventory.quantity) {
    throw new Error("Insufficient stock");
  }

  // Create the order
  const result = await OrderModel.create(order);

  // Update the inventory
  product.inventory.quantity -= order.quantity;
  if (product.inventory.quantity <= 0) {
    product.inventory.inStock = false;
    product.inventory.quantity = 0;
  }

  await product.save();

  return result;
};
const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const findOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({
    email: { $regex: email, $options: "i" },
  });
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  findOrdersByEmailFromDB,
};
