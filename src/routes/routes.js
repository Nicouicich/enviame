import { Router } from "express";
import { router as userRouter } from "./users";
import { router as productRouter } from "./products";
import { router as categoryRouter } from "./categories";
import { router as transactionRouter } from "./transaction";

const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/transactions", transactionRouter);

export { router };
