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
const authService_1 = __importDefault(require("../services/authService"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield authService_1.default.registerUser(req.body);
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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield authService_1.default.loginUser(req.body);
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
// const logout: IController = async(req:Request, res:Response) => {
//     try {
//         const data=await authService.logoutUser(req.body);
//         if(data instanceof Error) {
//             return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
//         }
//         return ApiResponse.result(res, data, httpStatusCode.OK);
//     } catch (error) {
//         ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
//         return;   
//     }
// }
exports.default = {
    register,
    login
};
