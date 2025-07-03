import {query} from '../config/database';
import { Harvest } from '../types/harvest';

export const HarvestModel = {
    async addHarvestData(harvest: Omit<Harvest, 'id'>): Promise<Harvest | null> {
        try {
            const sql = `
                INSERT INTO harvest (
                    mushroom_type, total_weight, no_of_bags, section, date_of_harvest
                ) VALUES (?, ?, ?, ?, ?)
            `;
            const params = [
                harvest.mushroomType,
                harvest.totalWeight,
                harvest.noOfBags,
                harvest.section,
                harvest.dateOfHarvest
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result.insertId : null;
        } catch (error) {
            console.error('Error creating harvest:', error);
            throw error;
        }
    },

    async getAllHarvestsData(): Promise<Harvest[]> {
        try {
            const sql = 'SELECT * FROM harvest ORDER BY date_of_harvest DESC, created_at DESC';
            const result = await query(sql);
            return result as Harvest[] || [];
        } catch (error) {
            console.error('Error fetching all harvest data:', error);
            throw error;
        }
    },

    async getHarvestDataById(id: number): Promise<Harvest | null> {
        try {
            const sql = 'SELECT * FROM harvest WHERE id = ?';
            const params = [id];
            const results = await query(sql, params);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            console.error('Error fetching harvest by ID:', error);
            throw error;
        }
    },

    async updateHarvestData(id: number, harvest: Omit<Harvest, 'id'>): Promise<Harvest | null> {
        try {
            const sql = `
                UPDATE harvest SET
                    mushroom_type = ?, total_weight = ?, no_of_bags = ?,
                    section = ?, date_of_harvest = ?
                WHERE id = ?
            `;
            const params = [
                harvest.mushroomType,
                harvest.totalWeight,
                harvest.noOfBags,
                harvest.section,
                harvest.dateOfHarvest,
                id
            ];
            const result = await query(sql, params);
            return result.affectedRows > 0 ? result : null;
        } catch (error) {
            console.error('Error updating harvest data:', error);
            throw error;
        }
    },

    async deleteHarvestData(id: number): Promise<boolean> {
        try {
            const sql = 'DELETE FROM harvest WHERE id = ?';
            const params = [id];
            const result = await query(sql, params);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting harvest data:', error);
            throw error;
        }
    }

}