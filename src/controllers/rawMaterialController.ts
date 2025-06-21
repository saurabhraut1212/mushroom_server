import { Request, Response } from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import rawMaterialService from "../services/rawMaterialService";


const addRawMaterial: IController = async (req: Request, res: Response) => {
    try {
        const data = await rawMaterialService.addRawMaterial(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getRawMaterials: IController = async (req: Request, res: Response) => {
    try {
        const data = await rawMaterialService.getRawMaterials();
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getRawMaterialById: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Raw material ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid raw material ID format");
        }
        const data = await rawMaterialService.getRawMaterialWithId(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
}

const updateRawMaterial: IController = async (req: Request, res: Response) => {
    try {
          const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Raw material ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid raw material ID format");
        }
        const data = await rawMaterialService.updateRawMaterialById(parsedId, req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const deleteRawMaterial: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Raw material ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid raw material ID format");
        }
        const data = await rawMaterialService.deleteRawMaterialById(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
}
 
export default {
    getRawMaterials,
    addRawMaterial,
    getRawMaterialById,
    updateRawMaterial,
    deleteRawMaterial
};