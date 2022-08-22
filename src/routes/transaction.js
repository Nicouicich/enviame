import { Router } from "express";
import {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactions";

const router = Router();

router.get("/", getAllTransactions);

router.get("/:id", getTransactionById);

router.post("/", createTransaction);

router.put("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);

export {router}