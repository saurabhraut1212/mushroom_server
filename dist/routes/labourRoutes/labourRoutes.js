"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const labourController_1 = __importDefault(require("../../controllers/labourController"));
const router = express_1.default.Router();
router.post("/addLabour", labourController_1.default.addLabour);
router.get("/getAllLabours", labourController_1.default.getAllLabours);
router.get("/getLaboursById/:id", labourController_1.default.getLaboursById);
router.put("/updateLabours/:id", labourController_1.default.updateLabours);
router.delete("/deleteLabours/:id", labourController_1.default.deleteLabours);
exports.default = router;
