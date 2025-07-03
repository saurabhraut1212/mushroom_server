import express from "express";
import labourController from "../../controllers/labourController"

const router=express.Router();

router.post("/addLabour",labourController.addLabour);
router.get("/getAllLabours",labourController.getAllLabours);
router.get("/getLaboursById/:id",labourController.getLaboursById);
router.put("/updateLabours/:id",labourController.updateLabours);
router.delete("/deleteLabours/:id",labourController.deleteLabours)

export default router;