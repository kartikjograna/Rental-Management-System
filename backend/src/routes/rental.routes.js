import express from "express";
import {
  createRentalOrder,
  getRentalOrders
} from "../controllers/rental.controller.js";

const router = express.Router();

router.post("/", createRentalOrder);
router.get("/", getRentalOrders);

export default router;
