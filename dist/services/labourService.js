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
const labourModel_1 = require("../models/labourModel");
const addLabourData = (labour) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield labourModel_1.labourModel.addLaboursData(labour);
        if (!data || data === null) {
            throw new Error("Failed to add labour");
        }
        return {
            message: "Labour added successfully"
        };
    }
    catch (error) {
        console.error("Error adding labour:", error);
        return new Error("Error adding labour");
    }
});
const fetchAllLabours = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield labourModel_1.labourModel.fetchAllLabour();
        if (!data || data === null) {
            throw new Error("Failed to fetch labours data");
        }
        return {
            data,
            message: "Labours fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching labours", error);
        return new Error("Error in fetching labours");
    }
});
const fetchLaboursWithId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield labourModel_1.labourModel.fetchLabourWithId(id);
        if (!data || data === null) {
            throw new Error("Failed to fetch labours with id");
        }
        return {
            data,
            message: "Labours with id fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching labours with id", error);
        return new Error("Error in fetching labours with id");
    }
});
const updateLabour = (id, labour) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield labourModel_1.labourModel.updateLabourById(id, labour);
        if (!result || result === null) {
            throw new Error("Failed to update labour with id");
        }
        const data = yield labourModel_1.labourModel.fetchLabourWithId(id);
        if (!data) {
            throw new Error("Failed to retrieve updated labour");
        }
        return {
            data,
            message: "Labour updated successfully"
        };
    }
    catch (error) {
        console.error("Error in updating labours with id", error);
        return new Error("Error in updating labours with id");
    }
});
const deleteLabour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield labourModel_1.labourModel.deleteLabourById(id);
        if (!result) {
            throw new Error("Failed to delete labour");
        }
        return {
            message: "Labour with id deleted successfully"
        };
    }
    catch (error) {
        console.error("Error in deleting labours with id", error);
        return new Error("Error in deleting labours with id");
    }
});
exports.default = {
    addLabourData,
    fetchAllLabours,
    fetchLaboursWithId,
    updateLabour,
    deleteLabour
};
