import {SpawnModel} from '../models/spawnModel';
import {Spawn} from '../types/spawn';

const addSpawnData= async (spawn: Spawn): Promise<object> => {
    try {
        const data = await SpawnModel.addSpawnData(spawn);
        if (!data || data === null) {
            throw new Error('Failed to create spawn data');
        }
        return {
            message:"Spawn data added successfully"
        }
    } catch (error) {
        console.error('Error adding spawn data:', error);
        return new Error('Failed to add spawn data');
    }
};

const getAllSpawnData = async (): Promise<object> => {
    try {
        const data = await SpawnModel.getAllSpawnData();
        if (!data || data === null) {
            throw new Error('No spawn data found');
        }
          return {
             data,
            message: "Spawn data fetched successfully"
        };
    } catch (error) {
        console.error('Error fetching all spawn data:', error);
        return new Error('Failed to fetch spawn data');
    }
};

const getSpawnWithId = async (id: number): Promise<object> => {
    try {
        const data = await SpawnModel.getSpawnWithId(id);
        if (!data || data === null) {
            throw new Error(`No spawn data found for ID: ${id}`);
        }
        return {
            data,
            message: "Spawn data fetched successfully"
        };
    } catch (error) {
        console.error(`Error fetching spawn data with ID ${id}:`, error);
        return new Error(`Failed to fetch spawn data for ID: ${id}`);
    }
};

const updateSpawnData = async (id: number, spawn: Spawn): Promise<object> => {
    try {
        const result = await SpawnModel.updateSpawnData(id, spawn);
        if (!result || result === null) {
            throw new Error(`Failed to update spawn data with ID: ${id}`);
        }
        const data = await SpawnModel.getSpawnWithId(id);
        if (!data) {
            throw new Error(`Failed to fetch updated spawn data for ID: ${id}`);
        }
        return {
            data,
            message: "Spawn data updated successfully"
        };
    } catch (error) {
        console.error(`Error updating spawn data with ID ${id}:`, error);
        return new Error(`Failed to update spawn data for ID: ${id}`);
    }   
};

const deleteSpawnData = async (id: number): Promise<object> => {
    try {
        const result = await SpawnModel.deleteSpawnData(id);
        if (!result || result === null) {
            throw new Error(`Failed to delete spawn data with ID: ${id}`);
        }
        return {
            message: "Spawn data deleted successfully"
        };
    } catch (error) {
        console.error(`Error deleting spawn data with ID ${id}:`, error);
        return new Error(`Failed to delete spawn data for ID: ${id}`);
    }
}


export default {
    addSpawnData,
    getAllSpawnData,
    getSpawnWithId,
    updateSpawnData,
    deleteSpawnData


}