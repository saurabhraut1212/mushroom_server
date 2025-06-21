"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class ApiResponse {
}
ApiResponse.result = (res, result, status = 200) => {
    res.status(status);
    res.json({
        status,
        message: "SUCCESS",
        result
    });
};
ApiResponse.error = (res, status = 400, error = http_status_codes_1.default.getStatusText(status)) => {
    res.status(status).json({
        status,
        message: error,
        result: null
    });
};
exports.default = ApiResponse;
