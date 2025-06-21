import { RawMaterialModel } from "../models/rawMaterialModel";
import { RawMaterial } from "../types/rawMaterial";


const addRawMaterial = async (rawMaterial: RawMaterial): Promise<{message:string}> => {
    try {
        // Validate all required fields
        const requiredFields: (keyof RawMaterial)[] = [
            'type', 
            'quantity', 
            'ratePerTon', 
            'totalCost',
            'date',
            'transportCost',
            'supplierName',
            'supplierAddress',
            'supplierContact'
        ];

        const missingFields = requiredFields.filter(field => {
            const value = rawMaterial[field];
            return value === undefined || 
                   value === null || 
                   (typeof value === 'string' && value.trim() === '') ||
                   (typeof value === 'number' && isNaN(value));
        });

        if (missingFields.length > 0) {
            throw new Error(`Missing or invalid required fields: ${missingFields.join(', ')}`);
        }


        // Create new raw material without auto-generated fields
        const newRawMaterial: Omit<RawMaterial, 'id' > = {
            type: rawMaterial.type.trim(),
            quantity: rawMaterial.quantity,
            ratePerTon: rawMaterial.ratePerTon,
            totalCost: rawMaterial.totalCost,
            date: rawMaterial.date,
            transportCost: rawMaterial.transportCost,
            supplierName: rawMaterial.supplierName.trim(),
            supplierAddress: rawMaterial.supplierAddress.trim(),
            supplierContact: rawMaterial.supplierContact.trim()
        };

        const createdRawMaterial = await RawMaterialModel.createRawMaterial(newRawMaterial);
        
        if (!createdRawMaterial) {
            throw new Error("Failed to create raw material in database");
        }

        return {
            message: "Raw material added successfully",
        };
        
    } catch (error) {
        console.error("Error adding raw material:", error);
        throw error; 
    }
}

export const getRawMaterials = async (): Promise<object> => {
    try {
        const data = await RawMaterialModel.findRawMaterials();

        if (!data || data.length === 0) {
            return [];
        }
        return {
            data,
            message: "Raw materials fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching raw material(s):", error);
        throw error;
    }
};

export const getRawMaterialWithId = async (id: number): Promise<object | null> => {
    try {
        const data = await RawMaterialModel.findRawMaterialById(id);
        if (!data) {
            return null;
        }
        return {
            data,
            message: "Raw material fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching raw material by ID:", error);
        throw error;
    }
}

export const updateRawMaterialById = async (
  id: number,
  updatedData: Partial<RawMaterial>
): Promise<object> => {
  try {
    const success = await RawMaterialModel.updateRawMaterial(id, updatedData);

    if (!success) {
      throw new Error(`Raw material with ID ${id} not found or update failed`);
    }

    const data = await RawMaterialModel.findRawMaterialById(id);
    if (!data) {
      throw new Error(`Failed to retrieve updated raw material with ID ${id}`);
    }

    return {
        data,
        message: "Raw material updated successfully"
    };
  } catch (error) {
    console.error("Error in service updating raw material:", error);
    throw error;
  }
};

export const deleteRawMaterialById = async (id: number): Promise<object> => {
  try {
    const success = await RawMaterialModel.deleteRawMaterialWithId(id);

    if (!success) {
      throw new Error(`Raw material with ID ${id} not found or deletion failed`);
    }

    return {
        message: "Raw material deleted successfully"
    };
  } catch (error) {
    console.error("Error in service deleting raw material:", error);
    throw error;
  }
}



export default {
    addRawMaterial,
    getRawMaterials,
    getRawMaterialWithId,
    updateRawMaterialById,
    deleteRawMaterialById
};