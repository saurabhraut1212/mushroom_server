import express from "express";
import authRoutes from "./authRoutes/authRoutes";
import rawMaterialRoutes from "./rawMaterialRoutes/rawMaterialRoutes";
import bagsRoutes from "./bagsRoutes/bagsRoutes";
import labourRoutes from './labourRoutes/labourRoutes';
import salesRoutes from './salesRoutes/salesRoutes';
import spawnRoutes from './spawnRoutes/spawnRoutes';
import harvestRoutes from './harvestRoutes/harvestRoutes'; 



const router = express.Router();

router.use("/auth",authRoutes);
router.use("/rawMaterial",rawMaterialRoutes);
router.use("/bags",bagsRoutes);
router.use("/labours",labourRoutes);
router.use("/sales",salesRoutes);
router.use("/spawn",spawnRoutes);
router.use("/harvest", harvestRoutes); 

export default router;