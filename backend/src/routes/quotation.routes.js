import express from "express";
import {
  createQuotation,
  getQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation
} from "../controllers/quotation.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createQuotation);
router.get("/", authMiddleware, getQuotations);
router.get("/:id", authMiddleware, getQuotationById);
router.patch("/:id", authMiddleware, updateQuotation);
router.delete("/:id", authMiddleware, deleteQuotation);

export default router;
