import { Request, Response } from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import labourService from "../services/labourService";

const addLabour: IController = async (req: Request, res: Response) => {
    try {
        const data = await labourService.addLabourData(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getAllLabours:IController=async(req:Request, res:Response)=>{
    try {
        const data=await labourService.fetchAllLabours();
        if(data instanceof Error){
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res,data,httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res,httpStatusCode.INTERNAL_SERVER_ERROR,(error as Error).message);
        return;
    }
}

const getLaboursById:IController=async(req:Request, res:Response)=>{
    try {
         const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data=await labourService.fetchLaboursWithId(parsedId);
        if(data instanceof Error){
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res,data,httpStatusCode.CREATED);
    } catch (error) {
         ApiResponse.error(res,httpStatusCode.INTERNAL_SERVER_ERROR,(error as Error).message);
        return;
    }
}

const updateLabours:IController=async(req:Request, res:Response)=>{
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data=await labourService.updateLabour(parsedId,req.body);
        if(data instanceof Error){
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res,data,httpStatusCode.CREATED);
    } catch (error) {
         ApiResponse.error(res,httpStatusCode.INTERNAL_SERVER_ERROR,(error as Error).message);
        return;
    }
}

const deleteLabours:IController=async(req:Request, res:Response)=>{
    try {
         const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data=await labourService.deleteLabour(parsedId);
        if(data instanceof Error){
            return ApiResponse.error(res,httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res,data,httpStatusCode.CREATED);

    } catch (error) {
        ApiResponse.error(res,httpStatusCode.INTERNAL_SERVER_ERROR,(error as Error).message);
        return;
    }
}



export default{
    addLabour,
    getAllLabours,
    getLaboursById,
    updateLabours,
    deleteLabours
}