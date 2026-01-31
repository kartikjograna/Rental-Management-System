import express from "express";
import {
  createInventory,
  getInventory,
  updateInventory
} from "../controllers/inventory.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createInventory);
router.get("/", authMiddleware, getInventory);
router.patch("/:id", authMiddleware, updateInventory);

export default router;