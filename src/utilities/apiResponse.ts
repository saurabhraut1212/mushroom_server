import { Response } from "express";
import httpStatusCodes from 'http-status-codes';

export default class ApiResponse {
    static result = (
        res: Response,
        result: object,
        status: number = 200,
    ) => {
        res.status(status);
      
        res.json({
            status,
            message: "SUCCESS",
            result
        });
    };

    static error = (
        res: Response,
        status: number = 400,
        error: string = httpStatusCodes.getStatusText(status),
    ) => {
        res.status(status).json({
            status,
            message: error,
            result:null
        });
    }
}
