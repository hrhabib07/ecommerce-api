import { z } from "zod";

// Define variant schema
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define inventory schema
const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Define product schema
const productValidationSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  tags: z.array(z.string()).nonempty(),
  variants: z.array(variantSchema).nonempty(),
  inventory: inventorySchema,
});

export default productValidationSchema;
