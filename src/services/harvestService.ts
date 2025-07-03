import { Harvest } from "../types/harvest";
import {HarvestModel} from "../models/harvestModel";


const addHarvestData = async (harvest: Harvest): Promise<object> => {
    try {
        const data = await HarvestModel.addHarvestData(harvest);
        if (!data || data === null) {
            throw new Error("Failed to create harvest data");
        }
        return {
            message: "Harvest data added successfully"
        };
    } catch (error) {
        console.error("Error adding harvest data:", error);
        return new Error("Failed to add harvest data");
    }
};

const getAllHarvestsData = async (): Promise<object> => {
    try {
        const data = await HarvestModel.getAllHarvestsData();
        if (!data || data === null) {
            throw new Error("No harvest data found");
        }
        return {
            data,
            message: "Harvest data fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching all harvest data:", error);
        return new Error("Failed to fetch harvest data");
    }
};

const getHarvestDataById = async (id: number): Promise<object> => {
    try {
        const data = await HarvestModel.getHarvestDataById(id);
        if (!data || data === null) {
            throw new Error(`No harvest data found for ID: ${id}`);
        }
        return {
            data,
            message: "Harvest data fetched successfully"
        };
    } catch (error) {
        console.error(`Error fetching harvest data with ID ${id}:`, error);
        return new Error(`Failed to fetch harvest data for ID: ${id}`);
    }
};

const updateHarvestData = async (id: number, harvest: Harvest): Promise<object> => {
    try {
        const result = await HarvestModel.updateHarvestData(id, harvest);
        if (!result || result === null) {
            throw new Error(`Failed to update harvest data with ID: ${id}`);
        }
        const data = await HarvestModel.getHarvestDataById(id);
        if (!data) {
            throw new Error(`Failed to fetch updated harvest data for ID: ${id}`);
        }
        return {
            data,
            message: "Harvest data updated successfully"
        };
    } catch (error) {
        console.error(`Error updating harvest data with ID ${id}:`, error);
        return new Error(`Failed to update harvest data for ID: ${id}`);
    }
};

const deleteHarvestData = async (id: number): Promise<object> => {
    try {
        const result = await HarvestModel.deleteHarvestData(id);
        if (!result || result === null) {
            throw new Error(`Failed to delete harvest data with ID: ${id}`);
        }
        return {
            message: "Harvest data deleted successfully"
        };
    } catch (error) {
        console.error(`Error deleting harvest data with ID ${id}:`, error);
        return new Error(`Failed to delete harvest data for ID: ${id}`);
    }
};

export default {
    addHarvestData,
    getAllHarvestsData,
    getHarvestDataById,
    updateHarvestData,
    deleteHarvestData
}