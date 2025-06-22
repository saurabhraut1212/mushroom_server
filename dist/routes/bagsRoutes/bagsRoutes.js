"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bagsController_1 = __importDefault(require("../../controllers/bagsController"));
const router = express_1.default.Router();
router.post("/addBags", bagsController_1.default.addBags);
router.get("/getAllBags", bagsController_1.default.getBags);
router.get("/getBagsById/:id", bagsController_1.default.getBagsById);
router.put("/updateBags/:id", bagsController_1.default.updateBags);
router.delete("/deleteBags/:id", bagsController_1.default.deleteBags);
exports.default = router;
