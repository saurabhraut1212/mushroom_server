"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRawMaterialById = exports.updateRawMaterialById = exports.getRawMaterialWithId = exports.getRawMaterials = void 0;
const rawMaterialModel_1 = require("../models/rawMaterialModel");
const addRawMaterial = (rawMaterial) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate all required fields
        const requiredFields = [
            'type',
            'quantity',
            'ratePerTon',
            'totalCost',
            'date',
            'transportCost',
            'supplierName',
            'supplierAddress',
            'supplierContact'
        ];
        const missingFields = requiredFields.filter(field => {
            const value = rawMaterial[field];
            return value === undefined ||
                value === null ||
                (typeof value === 'string' && value.trim() === '') ||
                (typeof value === 'number' && isNaN(value));
        });
        if (missingFields.length > 0) {
            throw new Error(`Missing or invalid required fields: ${missingFields.join(', ')}`);
        }
        // Create new raw material without auto-generated fields
        const newRawMaterial = {
            type: rawMaterial.type.trim(),
            quantity: rawMaterial.quantity,
            ratePerTon: rawMaterial.ratePerTon,
            totalCost: rawMaterial.totalCost,
            date: rawMaterial.date,
            transportCost: rawMaterial.transportCost,
            supplierName: rawMaterial.supplierName.trim(),
            supplierAddress: rawMaterial.supplierAddress.trim(),
            supplierContact: rawMaterial.supplierContact.trim()
        };
        const createdRawMaterial = yield rawMaterialModel_1.RawMaterialModel.createRawMaterial(newRawMaterial);
        if (!createdRawMaterial) {
            throw new Error("Failed to create raw material in database");
        }
        return {
            message: "Raw material added successfully",
        };
    }
    catch (error) {
        console.error("Error adding raw material:", error);
        throw error;
    }
});
const getRawMaterials = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield rawMaterialModel_1.RawMaterialModel.findRawMaterials();
        if (!data || data.length === 0) {
            return [];
        }
        return {
            data,
            message: "Raw materials fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching raw material(s):", error);
        throw error;
    }
});
exports.getRawMaterials = getRawMaterials;
const getRawMaterialWithId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield rawMaterialModel_1.RawMaterialModel.findRawMaterialById(id);
        if (!data) {
            return null;
        }
        return {
            data,
            message: "Raw material fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching raw material by ID:", error);
        throw error;
    }
});
exports.getRawMaterialWithId = getRawMaterialWithId;
const updateRawMaterialById = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield rawMaterialModel_1.RawMaterialModel.updateRawMaterial(id, updatedData);
        if (!success) {
            throw new Error(`Raw material with ID ${id} not found or update failed`);
        }
        const data = yield rawMaterialModel_1.RawMaterialModel.findRawMaterialById(id);
        if (!data) {
            throw new Error(`Failed to retrieve updated raw material with ID ${id}`);
        }
        return {
            data,
            message: "Raw material updated successfully"
        };
    }
    catch (error) {
        console.error("Error in service updating raw material:", error);
        throw error;
    }
});
exports.updateRawMaterialById = updateRawMaterialById;
const deleteRawMaterialById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield rawMaterialModel_1.RawMaterialModel.deleteRawMaterialWithId(id);
        if (!success) {
            throw new Error(`Raw material with ID ${id} not found or deletion failed`);
        }
        return {
            message: "Raw material deleted successfully"
        };
    }
    catch (error) {
        console.error("Error in service deleting raw material:", error);
        throw error;
    }
});
exports.deleteRawMaterialById = deleteRawMaterialById;
exports.default = {
    addRawMaterial,
    getRawMaterials: exports.getRawMaterials,
    getRawMaterialWithId: exports.getRawMaterialWithId,
    updateRawMaterialById: exports.updateRawMaterialById,
    deleteRawMaterialById: exports.deleteRawMaterialById
};
