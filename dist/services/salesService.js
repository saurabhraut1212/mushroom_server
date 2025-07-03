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
const salesModel_1 = require("../models/salesModel");
const addSalesData = (sales) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield salesModel_1.SalesModel.addSalesData(sales);
        if (!data || data === null) {
            throw new Error("Failed to add sales data");
        }
        return {
            message: "Sales data added successfully"
        };
    }
    catch (error) {
        console.error("Error adding sales data:", error);
        return new Error("Error adding sales data");
    }
});
const fetchAllSalesData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield salesModel_1.SalesModel.fetchAllSalesData();
        if (!data || data === null) {
            throw new Error("Failed to fetch sales data");
        }
        return {
            data,
            message: "Sales data fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching sales data", error);
        return new Error("Error in fetching sales data");
    }
});
const fetchSalesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield salesModel_1.SalesModel.fetchSalesById(id);
        if (!data || data === null) {
            throw new Error("Failed to fetch sales with id");
        }
        return {
            data,
            message: "Sales with id fetched successfully"
        };
    }
    catch (error) {
        console.error("Error fetching sales with id", error);
        return new Error("Error in fetching sales with id");
    }
});
const updateSalesData = (id, sales) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield salesModel_1.SalesModel.updateSalesData(id, sales);
        if (!result || result === null) {
            throw new Error("Failed to update sales with id");
        }
        const data = yield salesModel_1.SalesModel.fetchSalesById(id);
        if (!data) {
            throw new Error("Failed to fetch updated sales data");
        }
        return {
            data,
            message: "Sales updated successfully"
        };
    }
    catch (error) {
        console.error("Error updating sales with id", error);
        return new Error("Error in updating sales with id");
    }
});
const deleteSalesData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield salesModel_1.SalesModel.deleteSalesData(id);
        if (!result || result === null) {
            throw new Error("Failed to delete sales with id");
        }
        return {
            message: "Sales deleted successfully"
        };
    }
    catch (error) {
        console.error("Error deleting sales with id", error);
        return new Error("Error in deleting sales with id");
    }
});
exports.default = {
    addSalesData,
    fetchAllSalesData,
    fetchSalesById,
    updateSalesData,
    deleteSalesData
};
