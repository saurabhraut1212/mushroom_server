import express from "express";
import authRoutes from "./authRoutes/authRoutes";
import rawMaterialRoutes from "./rawMaterialRoutes/rawMaterialRoutes";
import bagsRoutes from "./bagsRoutes/bagsRoutes";

const router = express.Router();

router.use("/auth",authRoutes);
router.use("/rawMaterial",rawMaterialRoutes);
router.use("/bags",bagsRoutes)

export default router;