import express from 'express';
import rawMaterialController from '../../controllers/rawMaterialController';

const router=express.Router();

router.post("/add",rawMaterialController.addRawMaterial);
router.get("/getAll", rawMaterialController.getRawMaterials);
router.get("/getById/:id", rawMaterialController.getRawMaterialById);
router.put("/update/:id", rawMaterialController.updateRawMaterial);
router.delete("/delete/:id", rawMaterialController.deleteRawMaterial);

export default router;