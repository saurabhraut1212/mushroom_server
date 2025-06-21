import express from "express";
import authRoutes from "./authRoutes/authRoutes";
import rawMaterialRoutes from "./rawMaterialRoutes/rawMaterialRoutes";

const router = express.Router();

router.use("/auth",authRoutes);
router.use("/rawMaterial",rawMaterialRoutes);

export default router;