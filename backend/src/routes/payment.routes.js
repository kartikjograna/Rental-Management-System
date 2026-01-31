import express from "express";
import {
  createPayment,
  getPayments,
  getPaymentById,
  refundPayment
} from "../controllers/payment.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPayment);
router.get("/", authMiddleware, getPayments);
router.get("/:id", authMiddleware, getPaymentById);
router.post("/:id/refund", authMiddleware, refundPayment);

export default router;
