import {Request, Response} from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import salesService from "../services/salesService";

const addSales:IController=async(req:Request,res:Response)=>{
    try {
        // Assuming salesService.addSales is defined and returns a Promise
        const data = await salesService.addSalesData(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
}

const getAllSales:IController=async(req:Request,res:Response)=>{
    try {
        // Assuming salesService.getAllSales is defined and returns a Promise
        const data = await salesService.fetchAllSalesData();
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }

}

const getSalesById:IController=async(req:Request,res:Response)=>{
    try {
         const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        // Assuming salesService.getSalesById is defined and returns a Promise
        const data = await salesService.fetchSalesById(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
        
    }
}

const updateSales:IController=async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = await salesService.updateSalesData(parsedId, req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
}

const deleteSales:IController=async(req:Request,res:Response)=>{  
    
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = await salesService.deleteSalesData(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }  
}

export default{
    addSales,
    getAllSales,
    getSalesById,
    updateSales,
    deleteSales



}