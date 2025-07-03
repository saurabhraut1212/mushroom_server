import {query} from "../config/database";
import { Sales } from "../types/sales";

export const SalesModel = {
    async addSalesData(sales: Omit<Sales, 'id'>): Promise<Sales | null> {
        try {
            const sql = `
                INSERT INTO sales (
                    customer_name, contact_number, address, mushroom_type, quantity, price_per_kg, total_price, date_of_sale
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const params = [
                sales.customerName,
                sales.contactNumber,
                sales.address,
                sales.mushroomType,
                sales.quantity,
                sales.pricePerKg,
                sales.totalPrice,
                sales.dateOfSale
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result.insertId : null;
        } catch (error) {
            console.error('Error creating sales:', error);
            throw error;
        }
    },

    async fetchAllSalesData(): Promise<Sales[]> {
        try {
            const sql = 'SELECT * FROM sales ORDER BY date_of_sale DESC, created_at DESC';
            const results = await query(sql);
            return results as Sales[] || [];
        } catch (error) {
            console.error('Error fetching sales:', error);
            throw error;
        }
    },

    async fetchSalesById(id: number): Promise<Sales | null> {
        try {
            const sql = 'SELECT * FROM sales WHERE id = ?';
            const params = [id];
            const results = await query(sql, params);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            console.error('Error fetching sales by ID:', error);
            throw error;
        }
    },
    
    async updateSalesData(id: number, sales: Omit<Sales, 'id'>): Promise<Sales | null> {
        try {
            const sql = `
                UPDATE sales SET
                    customer_name = ?, contact_number = ?, address = ?,
                    mushroom_type = ?, quantity = ?, price_per_kg = ?,
                    total_price = ?, date_of_sale = ?
                WHERE id = ?
            `;
            const params = [
                sales.customerName,
                sales.contactNumber,
                sales.address,
                sales.mushroomType,
                sales.quantity,
                sales.pricePerKg,
                sales.totalPrice,
                sales.dateOfSale,
                id
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result : null;
        } catch (error) {
            console.error('Error updating sales:', error);
            throw error;
        }
    },

    async deleteSalesData(id: number): Promise<boolean> {
        try {
            const sql = 'DELETE FROM sales WHERE id = ?';
            const params = [id];
            const result = await query(sql, params);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting sales:', error);
            throw error;
        }
    }

 
};