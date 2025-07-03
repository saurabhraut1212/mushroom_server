import express from "express";
import spawnController from "../../controllers/spawnController";

const router=express.Router();

router.post("/addSpawn",spawnController.addSpawn);
router.get("/getAllSpawn",spawnController.getAllSpawn); 
router.get("/getSpawnById/:id",spawnController.getSpawnById);
router.put("/updateSpawn/:id",spawnController.updateSpawn);
router.delete("/deleteSpawn/:id",spawnController.deleteSpawn);

export default router;


