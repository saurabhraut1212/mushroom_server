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
const spawnModel_1 = require("../models/spawnModel");
const addSpawnData = (spawn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spawnModel_1.SpawnModel.addSpawnData(spawn);
        if (!data || data === null) {
            throw new Error('Failed to create spawn data');
        }
        return {
            message: "Spawn data added successfully"
        };
    }
    catch (error) {
        console.error('Error adding spawn data:', error);
        return new Error('Failed to add spawn data');
    }
});
const getAllSpawnData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spawnModel_1.SpawnModel.getAllSpawnData();
        if (!data || data === null) {
            throw new Error('No spawn data found');
        }
        return {
            data,
            message: "Spawn data fetched successfully"
        };
    }
    catch (error) {
        console.error('Error fetching all spawn data:', error);
        return new Error('Failed to fetch spawn data');
    }
});
const getSpawnWithId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spawnModel_1.SpawnModel.getSpawnWithId(id);
        if (!data || data === null) {
            throw new Error(`No spawn data found for ID: ${id}`);
        }
        return {
            data,
            message: "Spawn data fetched successfully"
        };
    }
    catch (error) {
        console.error(`Error fetching spawn data with ID ${id}:`, error);
        return new Error(`Failed to fetch spawn data for ID: ${id}`);
    }
});
const updateSpawnData = (id, spawn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield spawnModel_1.SpawnModel.updateSpawnData(id, spawn);
        if (!result || result === null) {
            throw new Error(`Failed to update spawn data with ID: ${id}`);
        }
        const data = yield spawnModel_1.SpawnModel.getSpawnWithId(id);
        if (!data) {
            throw new Error(`Failed to fetch updated spawn data for ID: ${id}`);
        }
        return {
            data,
            message: "Spawn data updated successfully"
        };
    }
    catch (error) {
        console.error(`Error updating spawn data with ID ${id}:`, error);
        return new Error(`Failed to update spawn data for ID: ${id}`);
    }
});
const deleteSpawnData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield spawnModel_1.SpawnModel.deleteSpawnData(id);
        if (!result || result === null) {
            throw new Error(`Failed to delete spawn data with ID: ${id}`);
        }
        return {
            message: "Spawn data deleted successfully"
        };
    }
    catch (error) {
        console.error(`Error deleting spawn data with ID ${id}:`, error);
        return new Error(`Failed to delete spawn data for ID: ${id}`);
    }
});
exports.default = {
    addSpawnData,
    getAllSpawnData,
    getSpawnWithId,
    updateSpawnData,
    deleteSpawnData
};
