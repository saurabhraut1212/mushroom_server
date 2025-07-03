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
const harvestModel_1 = require("../models/harvestModel");
const addHarvestData = (harvest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield harvestModel_1.HarvestModel.addHarvestData(harvest);
        if (!data || data === null) {
            throw new Error("Failed to create harvest data");
        }
        return {
            message: "Harvest data added successfully"
        };
    }
    catch (error) {
        console.error("Error adding harvest data:", error);
        return new Error("Failed to add harvest data");
    }
});
const getAllHarvestsData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield harvestModel_1.HarvestModel.getAllHarvestsData();
        if (!data || data === null) {
            throw new Error("No harvest data found");
        }
        return {
            data,
            message: "Harvest data fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching all harvest data:", error);
        return new Error("Failed to fetch harvest data");
    }
});
const getHarvestDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield harvestModel_1.HarvestModel.getHarvestDataById(id);
        if (!data || data === null) {
            throw new Error(`No harvest data found for ID: ${id}`);
        }
        return {
            data,
            message: "Harvest data fetched successfully"
        };
    }
    catch (error) {
        console.error(`Error fetching harvest data with ID ${id}:`, error);
        return new Error(`Failed to fetch harvest data for ID: ${id}`);
    }
});
const updateHarvestData = (id, harvest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield harvestModel_1.HarvestModel.updateHarvestData(id, harvest);
        if (!result || result === null) {
            throw new Error(`Failed to update harvest data with ID: ${id}`);
        }
        const data = yield harvestModel_1.HarvestModel.getHarvestDataById(id);
        if (!data) {
            throw new Error(`Failed to fetch updated harvest data for ID: ${id}`);
        }
        return {
            data,
            message: "Harvest data updated successfully"
        };
    }
    catch (error) {
        console.error(`Error updating harvest data with ID ${id}:`, error);
        return new Error(`Failed to update harvest data for ID: ${id}`);
    }
});
const deleteHarvestData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield harvestModel_1.HarvestModel.deleteHarvestData(id);
        if (!result || result === null) {
            throw new Error(`Failed to delete harvest data with ID: ${id}`);
        }
        return {
            message: "Harvest data deleted successfully"
        };
    }
    catch (error) {
        console.error(`Error deleting harvest data with ID ${id}:`, error);
        return new Error(`Failed to delete harvest data for ID: ${id}`);
    }
});
exports.default = {
    addHarvestData,
    getAllHarvestsData,
    getHarvestDataById,
    updateHarvestData,
    deleteHarvestData
};
