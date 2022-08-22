import { Router } from "express";
import { middlewareAuth } from "../middlewares/middlewareAuth";
import { middlewareIsAdmin } from "../middlewares/middlewareIsAdmin";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  checkBodyProduct,
} from "../controllers/products";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", middlewareAuth, createProduct);

router.put("/:id", checkBodyProduct, updateProduct);

router.delete("/:id", middlewareAuth, deleteProduct);

export { router };
