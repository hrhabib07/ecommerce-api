import * as z from "zod";

// Define order schema
export const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  quantity: z.number().int().positive(),
  price: z.number().positive(),
});
