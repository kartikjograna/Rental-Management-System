import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

// Admin-only: get all users
router.get("/", authMiddleware, roleMiddleware("admin"), getUsers);

export default router;
