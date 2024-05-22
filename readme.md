# E-commerce API

## Overview

This project is an Express application developed with TypeScript, integrating MongoDB with Mongoose for effective data management. It ensures data integrity through validation using Zod.

## Live API

E-commerce API: [https://ecommerce-api-peach.vercel.app/](https://ecommerce-api-peach.vercel.app/)

## Features

- **Product Management**

  - Create a new product
  - Retrieve a list of all products
  - Retrieve a specific product by ID
  - Update product information
  - Delete a product
  - Search for products

- **Order Management**

  - Create a new order
  - Retrieve all orders
  - Retrieve orders by user email

- **Inventory Management**

  - Reduce the quantity of the ordered product in inventory when creating a new order
  - Update the inStock property based on the ordered quantity

- **Error Handling**
  - Handle insufficient quantity error
  - Handle not found errors for orders and routes

## API Endpoints

### Product Management

1. **Create a New Product**

   - **Endpoint:** `/api/products`
   - **Method:** POST
   - **Sample Request Body:**
     ```json
     {
       "name": "iPhone 13",
       "description": "A sleek and powerful smartphone with cutting-edge features.",
       "price": 999,
       "category": "Electronics",
       "tags": ["smartphone", "Apple", "iOS"],
       "variants": [
         {
           "type": "Color",
           "value": "Midnight Blue"
         },
         {
           "type": "Storage Capacity",
           "value": "256GB"
         }
       ],
       "inventory": {
         "quantity": 50,
         "inStock": true
       }
     }
     ```
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Product created successfully!",
       "data": { ... }
     }
     ```

2. **Retrieve a List of All Products**

   - **Endpoint:** `/api/products`
   - **Method:** GET
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Products fetched successfully!",
       "data": [ ... ]
     }
     ```

3. **Retrieve a Specific Product by ID**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** GET
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Product fetched successfully!",
       "data": { ... }
     }
     ```

4. **Update Product Information**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** PUT
   - **Sample Request Body:** Same as create product
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Product updated successfully!",
       "data": { ... }
     }
     ```

5. **Delete a Product**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** DELETE
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Product deleted successfully!",
       "data": null
     }
     ```

6. **Search a Product**
   - **Endpoint:** `/api/products?searchTerm=iphone`
   - **Method:** GET
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Products matching search term 'iphone' fetched successfully!",
       "data": [ ... ]
     }
     ```

### Order Management

1. **Create a New Order**

   - **Endpoint:** `/api/orders`
   - **Method:** POST
   - **Sample Request Body:**
     ```json
     {
       "email": "level2@programming-hero.com",
       "productId": "5fd67e890b60c903cd8544a3",
       "price": 999,
       "quantity": 1
     }
     ```
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Order created successfully!",
       "data": { ... }
     }
     ```

2. **Retrieve All Orders**

   - **Endpoint:** `/api/orders`
   - **Method:** GET
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Orders fetched successfully!",
       "data": [ ... ]
     }
     ```

3. **Retrieve Orders by User Email**
   - **Endpoint:** `/api/orders?email=level2@programming-hero.com`
   - **Method:** GET
   - **Sample Response:**
     ```json
     {
       "success": true,
       "message": "Orders fetched successfully for user email!",
       "data": [ ... ]
     }
     ```

## Error Handling

- **Insufficient Quantity Error**

  - **Sample Response:**
    ```json
    {
      "success": false,
      "message": "Insufficient quantity available in inventory"
    }
    ```

- **Not Found Error**

  - **Sample Response:**
    ```json
    {
      "success": false,
      "message": "Order not found"
    }
    ```

- **Not Found Route**
  - **Sample Response:**
    ```json
    {
      "success": false,
      "message": "Route not found"
    }
    ```

## Validation

Zod is used to validate incoming data for product and order creation and updating operations. This ensures that the data adheres to the structure defined in the models.
