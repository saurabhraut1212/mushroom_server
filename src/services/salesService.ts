import {SalesModel} from '../models/salesModel';
import {Sales} from '../types/sales';

const addSalesData = async (sales: Sales): Promise<object> => {
    try {
        const data = await SalesModel.addSalesData(sales);
        if (!data || data === null) {
            throw new Error("Failed to add sales data");
        }
        return {
            message: "Sales data added successfully"
        };
    } catch (error) {
        console.error("Error adding sales data:", error);
        return new Error("Error adding sales data");
    }
};

const fetchAllSalesData = async (): Promise<object> => {
    try {
        const data = await SalesModel.fetchAllSalesData();
        if (!data || data === null) {
            throw new Error("Failed to fetch sales data");
        }
        return {
            data,
            message: "Sales data fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching sales data", error);
        return new Error("Error in fetching sales data");
    }
};

const fetchSalesById = async (id: number): Promise<object> => {
    try {
        const data = await SalesModel.fetchSalesById(id);
        if (!data || data === null) {
            throw new Error("Failed to fetch sales with id");
        }
        return {
            data,
            message: "Sales with id fetched successfully"
        };
    } catch (error) {
        console.error("Error fetching sales with id", error);
        return new Error("Error in fetching sales with id");
    }
};

const updateSalesData = async (id: number, sales: Sales): Promise<object> => {
    try {
        const result = await SalesModel.updateSalesData(id, sales);
        if (!result || result === null) {
            throw new Error("Failed to update sales with id");
        }
        const data = await SalesModel.fetchSalesById(id);
        if (!data) {
            throw new Error("Failed to fetch updated sales data");
        }
        return {
            data,
            message: "Sales updated successfully"
        };
    } catch (error) {
        console.error("Error updating sales with id", error);
        return new Error("Error in updating sales with id");
    }
};

const deleteSalesData = async (id: number): Promise<object> => {
    try {
        const result = await SalesModel.deleteSalesData(id);
        if (!result || result === null) {
            throw new Error("Failed to delete sales with id");
        }
        return {
            message: "Sales deleted successfully"
        };
    } catch (error) {
        console.error("Error deleting sales with id", error);
        return new Error("Error in deleting sales with id");
    }
};

export default {
    addSalesData,
    fetchAllSalesData,
    fetchSalesById,
    updateSalesData,
    deleteSalesData
}
