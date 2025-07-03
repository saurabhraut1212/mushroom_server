"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const harvestController_1 = __importDefault(require("../../controllers/harvestController"));
const router = express_1.default.Router();
router.post('/addHarvest', harvestController_1.default.addHarvest);
router.get('/getAllHarvests', harvestController_1.default.getAllHarvests);
router.get('/getHarvestById/:id', harvestController_1.default.getHarvestById);
router.put('/updateHarvest/:id', harvestController_1.default.updateHarvest);
router.delete('/deleteHarvest/:id', harvestController_1.default.deleteHarvest);
exports.default = router;
