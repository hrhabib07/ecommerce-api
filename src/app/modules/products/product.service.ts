import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getASingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateASingleProductInDB = async (id: string, productData: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getASingleProductFromDB,
  updateASingleProductInDB,
};
