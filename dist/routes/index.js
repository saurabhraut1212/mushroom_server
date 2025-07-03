"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./authRoutes/authRoutes"));
const rawMaterialRoutes_1 = __importDefault(require("./rawMaterialRoutes/rawMaterialRoutes"));
const bagsRoutes_1 = __importDefault(require("./bagsRoutes/bagsRoutes"));
const labourRoutes_1 = __importDefault(require("./labourRoutes/labourRoutes"));
const salesRoutes_1 = __importDefault(require("./salesRoutes/salesRoutes"));
const router = express_1.default.Router();
router.use("/auth", authRoutes_1.default);
router.use("/rawMaterial", rawMaterialRoutes_1.default);
router.use("/bags", bagsRoutes_1.default);
router.use("/labours", labourRoutes_1.default);
router.use("/sales", salesRoutes_1.default);
exports.default = router;
