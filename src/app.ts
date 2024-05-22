import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.route";
import { orderRouter } from "./app/modules/orders/order.route";
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
// application routes
app.use("/api", productRoutes);
app.use("/api", orderRouter);

app.get("/", (req: Request, res: Response) => {
  const a = 3;
  res.send(a);
});

export default app;
