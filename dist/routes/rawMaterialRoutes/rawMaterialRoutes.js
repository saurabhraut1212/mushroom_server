"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rawMaterialController_1 = __importDefault(require("../../controllers/rawMaterialController"));
const router = express_1.default.Router();
router.post("/add", rawMaterialController_1.default.addRawMaterial);
router.get("/getAll", rawMaterialController_1.default.getRawMaterials);
router.get("/getById/:id", rawMaterialController_1.default.getRawMaterialById);
router.put("/update/:id", rawMaterialController_1.default.updateRawMaterial);
router.delete("/delete/:id", rawMaterialController_1.default.deleteRawMaterial);
exports.default = router;
