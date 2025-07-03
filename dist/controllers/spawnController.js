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
const spawnService_1 = __importDefault(require("../services/spawnService"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const addSpawn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spawnService_1.default.addSpawnData(req.body);
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
const getAllSpawn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spawnService_1.default.getAllSpawnData();
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
const getSpawnById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = yield spawnService_1.default.getSpawnWithId(parsedId);
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
const updateSpawn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = yield spawnService_1.default.updateSpawnData(parsedId, req.body);
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
const deleteSpawn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return apiResponse_1.default.error(res, http_status_codes_1.default.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = yield spawnService_1.default.deleteSpawnData(parsedId);
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
    addSpawn,
    getAllSpawn,
    getSpawnById,
    updateSpawn,
    deleteSpawn
};
