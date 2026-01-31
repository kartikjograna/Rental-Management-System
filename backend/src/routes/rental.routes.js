import express from "express";
import {
    createRental,
    getRentals,
    getRentalById,
    confirmRental,
    pickupRental,
    returnRental,
    cancelRental,
    extendRental
} from "../controllers/rental.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRental);
router.get("/", authMiddleware, getRentals);
router.get("/:id", authMiddleware, getRentalById);

// Lifecycle actions
router.post("/:id/confirm", authMiddleware, confirmRental);
router.post("/:id/pickup", authMiddleware, pickupRental);
router.post("/:id/return", authMiddleware, returnRental);
router.post("/:id/cancel", authMiddleware, cancelRental);
router.post("/:id/extend", authMiddleware, extendRental);

export default router;
