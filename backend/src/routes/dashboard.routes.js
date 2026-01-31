import express from "express";
import {
  overview,
  revenue,
  utilization,
  topProducts
} from "../controllers/dashboard.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/overview", authMiddleware, roleMiddleware("admin"), overview);
router.get("/revenue", authMiddleware, roleMiddleware("admin"), revenue);
router.get("/utilization", authMiddleware, roleMiddleware("admin"), utilization);
router.get("/top-products", authMiddleware, roleMiddleware("admin"), topProducts);

export default router;
