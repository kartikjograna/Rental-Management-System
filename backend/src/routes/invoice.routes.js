import express from "express";
import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  downloadInvoicePDF
} from "../controllers/invoice.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createInvoice);
router.get("/", authMiddleware, getInvoices);
router.get("/:id", authMiddleware, getInvoiceById);
router.get("/:id/pdf", authMiddleware, downloadInvoicePDF);

export default router;
