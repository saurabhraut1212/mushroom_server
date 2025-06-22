import { Request, Response } from "express";
import IController from "../types/IController";
import ApiResponse from "../utilities/apiResponse";
import httpStatusCode from 'http-status-codes';
import bagsService from "../services/bagsService";

const addBags: IController = async (req: Request, res: Response) => {
    try {
        const data = await bagsService.addBag(req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.CREATED);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getBags: IController = async (req: Request, res: Response) => {
    try {
        const data = await bagsService.getBag();
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const getBagsById: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = await bagsService.getBagWithId(parsedId);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const updateBags: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = await bagsService.updateBagsById(parsedId, req.body);
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

const deleteBags: IController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Bag ID is required");
        }
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST, "Invalid bag ID format");
        }
        const data = await bagsService.deleteBagById(parsedId);
        console.log(res,"res")
        if (data instanceof Error) {
            return ApiResponse.error(res, httpStatusCode.BAD_REQUEST);
        }
        return ApiResponse.result(res, data, httpStatusCode.OK);
    } catch (error) {
        ApiResponse.error(res, httpStatusCode.INTERNAL_SERVER_ERROR, (error as Error).message);
        return;
    }
};

export default {
    addBags,
    getBags,
    getBagsById,
    updateBags,
    deleteBags
};