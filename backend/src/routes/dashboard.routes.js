import express from "express";
import { overview } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/overview", overview);

export default router;

