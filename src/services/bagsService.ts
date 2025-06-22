import { Bag } from "../types/bags";
import {BagsModel} from "../models/bagsModel"; 


const addBag = async (bag: Bag): Promise<object> => {
    try {
        const data = await BagsModel.createBag(bag);
        
        if (!data || data === null) {
            throw new Error("Failed to add bag");
        } 
        return {
            message: "Bag added successfully"
        };
        
    } catch (error) {
        console.error("Error adding bag:", error);
        return new Error("Error adding bag");
    }
}

const getBag = async (): Promise<object> => {
    try {
        const data=await BagsModel.getAllBags();
        if(!data || data.length === 0) {
            throw new Error("No bags found");
        }
        return {
            data,
            message: "Bags fetched successfully"
        };  
    } catch (error) {
        console.error("Error fetching bags:", error);
        return new Error("Error fetching bags");
    }
}

const getBagWithId = async (id: number): Promise<object> => {
    try {
        const data = await BagsModel.getBagById(id);
        if (!data) {
            throw new Error("Bag not found");
        }
        return {
            data,
            message: "Bag fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching bag by ID:", error);  
        return new Error("Error fetching bag by ID");
    }
}

const updateBagsById=async(id:number,bag:Bag):Promise<object>=>{
    try {
        const result = await BagsModel.updateBagById(id, bag);
        if (!result) {
            throw new Error("Failed to update bag");
        }
        const data=await BagsModel.getBagById(id);
        if(!data){
            throw new Error("Failed to retrieve updated bag");
        } 
        return {
            data,
            message: "Bag updated successfully"
        };
    } catch (error) {
        console.error("Error updating bag:", error);
        return new Error("Error updating bag");
    }
}

const deleteBagById = async (id: number): Promise<object> => {
    try {   
        const result = await BagsModel.deleteBagWithId(id);
        if (!result) {
            throw new Error("Failed to delete bag");
        }
        return {
            message: "Bag deleted successfully"
        };
    } catch (error) {
        console.error("Error deleting bag:", error);    
        return new Error("Error deleting bag");
    }
}

export default{
    addBag,
    getBag,
    getBagWithId,
    updateBagsById,
    deleteBagById
}