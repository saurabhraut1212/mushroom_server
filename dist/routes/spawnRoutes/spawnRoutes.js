"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spawnController_1 = __importDefault(require("../../controllers/spawnController"));
const router = express_1.default.Router();
router.post("/addSpawn", spawnController_1.default.addSpawn);
router.get("/getAllSpawn", spawnController_1.default.getAllSpawn);
router.get("/getSpawnById/:id", spawnController_1.default.getSpawnById);
router.put("/updateSpawn/:id", spawnController_1.default.updateSpawn);
router.delete("/deleteSpawn/:id", spawnController_1.default.deleteSpawn);
exports.default = router;
