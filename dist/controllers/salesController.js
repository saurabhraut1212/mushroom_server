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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse_1 = __importDefault(require("../utilities/apiResponse"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const salesService_1 = __importDefault(require("../services/salesService"));
const addSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming salesService.addSales is defined and returns a Promise
        const data = yield salesService_1.default.addSalesData(req.body);
        if (data instanceof Error) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST);
        }
        return apiResponse_1.default.result(res, data, http_status_codes_1.default.CREATED);
    }
    catch (error) {
        apiResponse_1.default.error(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, error.message);
        return;
    }
});
const getAllSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming salesService.getAllSales is defined and returns a Promise
        const data = yield salesService_1.default.fetchAllSalesData();
        if (data instanceof Error) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST);
        }
        return apiResponse_1.default.result(res, data, http_status_codes_1.default.OK);
    }
    catch (error) {
        apiResponse_1.default.error(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, error.message);
        return;
    }
});
const getSalesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid bag ID format");
        }
        // Assuming salesService.getSalesById is defined and returns a Promise
        const data = yield salesService_1.default.fetchSalesById(parsedId);
        if (data instanceof Error) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST);
        }
        return apiResponse_1.default.result(res, data, http_status_codes_1.default.OK);
    }
    catch (error) {
        apiResponse_1.default.error(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, error.message);
        return;
    }
});
const updateSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = yield salesService_1.default.updateSalesData(parsedId, req.body);
        if (data instanceof Error) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST);
        }
        return apiResponse_1.default.result(res, data, http_status_codes_1.default.OK);
    }
    catch (error) {
        apiResponse_1.default.error(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, error.message);
        return;
    }
});
const deleteSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = yield salesService_1.default.deleteSalesData(parsedId);
        if (data instanceof Error) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST);
        }
        return apiResponse_1.default.result(res, data, http_status_codes_1.default.OK);
    }
    catch (error) {
        apiResponse_1.default.error(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, error.message);
        return;
    }
});
exports.default = {
    addSales,
    getAllSales,
    getSalesById,
    updateSales,
    deleteSales
};
