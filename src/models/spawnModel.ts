import {query} from "../config/database";
import {Spawn} from "../types/spawn";

export const SpawnModel = {
    async addSpawnData(spawn:  Omit<Spawn, 'id'>): Promise<Spawn | null> {
        try {
            const sql = `
                INSERT INTO spawn (
                    spawn_type, quantity, price_per_kg, total_price, date_of_purchase
                ) VALUES (?, ?, ?, ?, ?)
            `;
            const params = [
                spawn.spawnType,
                spawn.quantity,
                spawn.pricePerKg,
                spawn.totalPrice,
                spawn.dateOfPurchase
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result.insertId : null;
        } catch (error) {
            console.error('Error creating spawn:', error);
            throw error;
        }
    },

    async getAllSpawnData(): Promise<Spawn[]> {
        try {
            const sql = 'SELECT * FROM spawn ORDER BY date_of_purchase DESC, created_at DESC';
            const results = await query(sql);
            return results as Spawn[] || [];
        } catch (error) {
            console.error('Error fetching all spawn data:', error);
            throw error;
        }
    },

    async getSpawnWithId(id: number): Promise<Spawn | null> {
        try {
            const sql = 'SELECT * FROM spawn WHERE id = ?';
            const params = [id];
            const results = await query(sql, params);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            console.error('Error fetching spawn by ID:', error);
            throw error;
        }
    },

    async updateSpawnData(id: number, spawn: Omit<Spawn, 'id'>): Promise<Spawn | null> {
        try {
            const sql = `
                UPDATE spawn SET
                    spawn_type = ?, quantity = ?, price_per_kg = ?,
                    total_price = ?, date_of_purchase = ?
                WHERE id = ?
            `;
            const params = [
                spawn.spawnType,
                spawn.quantity,
                spawn.pricePerKg,
                spawn.totalPrice,
                spawn.dateOfPurchase,
                id
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result : null;
        } catch (error) {
            console.error('Error updating spawn data:', error);
            throw error;
        }
    },

    async deleteSpawnData(id: number): Promise<boolean> {
        try {
            const sql = 'DELETE FROM spawn WHERE id = ?';
            const params = [id];
            const result = await query(sql, params);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting spawn data:', error);
            throw error;
        }
    }

}

