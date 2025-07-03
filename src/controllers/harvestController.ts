import { Request, Response } from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import harvestService from "../services/harvestService";

const addHarvest: IController = async (req: Request, res: Response) => {
    try {
        const data = await harvestService.addHarvestData(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getAllHarvests: IController = async (req: Request, res: Response) => {
    try {
        const data = await harvestService.getAllHarvestsData();
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getHarvestById: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Harvest ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid harvest ID format");
        }
        const data = await harvestService.getHarvestDataById(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const updateHarvest: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Harvest ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid harvest ID format");
        }
        const data = await harvestService.updateHarvestData(parsedId, req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const deleteHarvest: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Harvest ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid harvest ID format");
        }
        const result = await harvestService.deleteHarvestData(parsedId);
        if (result instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, result, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};


export default {
    addHarvest,
    getAllHarvests,
    getHarvestById,
    updateHarvest,
    deleteHarvest


}