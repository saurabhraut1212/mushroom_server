import { Request, Response } from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import authService from "../services/authService";

const register: IController = async(req:Request, res:Response) => {
    try {
        const data=await authService.registerUser(req.body);
        if(data instanceof Error) {
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;   
    }

}

const login: IController = async(req:Request, res:Response) => {
    try {
        const data=await authService.loginUser(req.body);
        if(data instanceof Error) {
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;   
    }
}



export default {
    register,   
    login
}