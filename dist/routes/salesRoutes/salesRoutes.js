"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const salesController_1 = __importDefault(require("../../controllers/salesController"));
const router = express_1.default.Router();
router.post("/addSales", salesController_1.default.addSales);
router.get("/getAllSales", salesController_1.default.getAllSales);
router.get("/getSalesById/:id", salesController_1.default.getSalesById);
router.put("/updateSales/:id", salesController_1.default.updateSales);
router.delete("/deleteSales/:id", salesController_1.default.deleteSales);
exports.default = router;
