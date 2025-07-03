import express from "express";
import salesController from "../../controllers/salesController";

const router=express.Router();
router.post("/addSales", salesController.addSales);
router.get("/getAllSales", salesController.getAllSales);
router.get("/getSalesById/:id", salesController.getSalesById);
router.put("/updateSales/:id", salesController.updateSales);
router.delete("/deleteSales/:id", salesController.deleteSales);

export default router;