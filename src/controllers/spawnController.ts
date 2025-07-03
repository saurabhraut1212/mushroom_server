import {Request,Response} from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import spawnService from "../services/spawnService";
import httpStatusCodes from 'http-status-codes';

const addSpawn: IController = async (req: Request, res: Response) => {
    try {
        const data = await spawnService.addSpawnData(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCodes.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};


const getAllSpawn: IController = async (req: Request, res: Response) => {
    try {   
        const data = await spawnService.getAllSpawnData();
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCodes.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getSpawnById: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = await spawnService.getSpawnWithId(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCodes.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const updateSpawn: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = await spawnService.updateSpawnData(parsedId, req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCodes.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
        return; 
    }
};

const deleteSpawn: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Spawn ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, "Invalid spawn ID format");
        }
        const data = await spawnService.deleteSpawnData(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCodes.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};


export default {
    addSpawn,
    getAllSpawn,
    getSpawnById,
    updateSpawn,
    deleteSpawn
}