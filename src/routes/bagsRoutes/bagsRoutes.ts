import express from 'express';
import bagsController from '../../controllers/bagsController';

const router=express.Router();

router.post("/addBags",bagsController.addBags);
router.get("/getAllBags", bagsController.getBags);
router.get("/getBagsById/:id", bagsController.getBagsById);
router.put("/updateBags/:id", bagsController.updateBags);
router.delete("/deleteBags/:id", bagsController.deleteBags);

export default router;