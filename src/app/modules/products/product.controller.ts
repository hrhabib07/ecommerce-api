import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // call service function
    const result = await productServices.createProductIntoDB(productData);
    // send response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    let result;

    if (searchTerm) {
      result = await productServices.findAProductUsingTextFromDB(searchTerm);
    } else {
      result = await productServices.getAllProductsFromDB();
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products.",
    });
  }
};

const getASingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getASingleProductFromDB(id);
    // send response
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
};

const updateASingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const productData = req.body;
    const result = await productServices.updateASingleProductInDB(
      id,
      productData,
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

const deleteASingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await productServices.deleteASingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getASingleProduct,
  updateASingleProduct,
  deleteASingleProduct,
};
