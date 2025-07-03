import express from 'express';
import harvestController from '../../controllers/harvestController';

const router=express.Router();
router.post('/addHarvest', harvestController.addHarvest);
router.get('/getAllHarvests', harvestController.getAllHarvests);
router.get('/getHarvestById/:id', harvestController.getHarvestById);
router.put('/updateHarvest/:id', harvestController.updateHarvest);
router.delete('/deleteHarvest/:id', harvestController.deleteHarvest);

export default router;