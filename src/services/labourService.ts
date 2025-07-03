import { labourModel } from "../models/labourModel";
import { Labour } from "../types/labour";

const addLabourData=async(labour:Labour):Promise<object> =>{
    try {
       const data=await labourModel.addLaboursData(labour);
       if(!data || data===null){
        throw new Error("Failed to add labour");
       }
       return {
        message:"Labour added successfully"
       }
    } catch (error) {
         console.error("Error adding labour:", error);
        return new Error("Error adding labour");
    }
}

const fetchAllLabours=async():Promise<object>=>{
    try {
        const data=await labourModel.fetchAllLabour();
        if(!data || data===null){
         throw new Error("Failed to fetch labours data");
        }
        return {
            data,
            message:"Labours fetched successfully"
        }
    } catch (error) {
        console.error("Error fetching labours",error);
        return new Error("Error in fetching labours")
        
    }
}

const fetchLaboursWithId=async(id:number):Promise<object>=>{
    try {
        const data=await labourModel.fetchLabourWithId(id);
        if(!data || data===null){
            throw new Error("Failed to fetch labours with id");
        }
        return {
            data,
            message:"Labours with id fetched successfully"
        }
    } catch (error) {
        console.error("Error fetching labours with id",error);
        return new Error("Error in fetching labours with id")
    }

}

const updateLabour=async(id:number,labour:Labour):Promise<object>=>{
    try {
        const result=await labourModel.updateLabourById(id,labour);
        if(!result || result===null){
            throw new Error("Failed to update labour with id")
        }
        const data=await labourModel.fetchLabourWithId(id);
        if(!data){
            throw new Error("Failed to retrieve updated labour")
        }
        return {
            data,
            message:"Labour updated successfully"
        }

    } catch (error) {
         console.error("Error in updating labours with id",error);
        return new Error("Error in updating labours with id")
    }


}

const deleteLabour=async(id:number):Promise<object>=>{
    try {
        const result=await labourModel.deleteLabourById(id);
        if(!result){
            throw new Error("Failed to delete labour");
        }
        return {
            message:"Labour with id deleted successfully"
        }
    } catch (error) {
         console.error("Error in deleting labours with id",error);
        return new Error("Error in deleting labours with id")
    }
    
}
export default{
    addLabourData,
    fetchAllLabours,
    fetchLaboursWithId,
    updateLabour,
    deleteLabour
}