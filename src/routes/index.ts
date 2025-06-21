import express from "express";
import authRoutes from "./authRoutes/authRoutes";

const router = express.Router();

router.use("/auth",authRoutes)

export default router;