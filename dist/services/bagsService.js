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
const bagsModel_1 = require("../models/bagsModel");
const addBag = (bag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield bagsModel_1.BagsModel.createBag(bag);
        if (!data || data === null) {
            throw new Error("Failed to add bag");
        }
        return {
            message: "Bag added successfully"
        };
    }
    catch (error) {
        console.error("Error adding bag:", error);
        return new Error("Error adding bag");
    }
});
const getBag = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield bagsModel_1.BagsModel.getAllBags();
        if (!data || data.length === 0) {
            throw new Error("No bags found");
        }
        return {
            data,
            message: "Bags fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching bags:", error);
        return new Error("Error fetching bags");
    }
});
const getBagWithId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield bagsModel_1.BagsModel.getBagById(id);
        if (!data) {
            throw new Error("Bag not found");
        }
        return {
            data,
            message: "Bag fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching bag by ID:", error);
        return new Error("Error fetching bag by ID");
    }
});
const updateBagsById = (id, bag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bagsModel_1.BagsModel.updateBagById(id, bag);
        if (!result) {
            throw new Error("Failed to update bag");
        }
        const data = yield bagsModel_1.BagsModel.getBagById(id);
        if (!data) {
            throw new Error("Failed to retrieve updated bag");
        }
        return {
            data,
            message: "Bag updated successfully"
        };
    }
    catch (error) {
        console.error("Error updating bag:", error);
        return new Error("Error updating bag");
    }
});
const deleteBagById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bagsModel_1.BagsModel.deleteBagWithId(id);
        if (!result) {
            throw new Error("Failed to delete bag");
        }
        return {
            message: "Bag deleted successfully"
        };
    }
    catch (error) {
        console.error("Error deleting bag:", error);
        return new Error("Error deleting bag");
    }
});
exports.default = {
    addBag,
    getBag,
    getBagWithId,
    updateBagsById,
    deleteBagById
};
