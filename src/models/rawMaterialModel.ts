import { query } from '../config/database';
import { RawMaterial } from '../types/rawMaterial';

export const RawMaterialModel = {
  
    async createRawMaterial(rawMaterial: Omit<RawMaterial, 'id'>): Promise<RawMaterial | null> {
        try {
            const sql = `
                INSERT INTO raw_materials (
                    type, quantity, rate_per_ton, total_cost, date, 
                    transport_cost, supplier_name, supplier_address, supplier_contact
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            const params = [
                rawMaterial.type,
                rawMaterial.quantity,
                rawMaterial.ratePerTon,
                rawMaterial.totalCost,
                rawMaterial.date,
                rawMaterial.transportCost,
                rawMaterial.supplierName,
                rawMaterial.supplierAddress,
                rawMaterial.supplierContact
            ];

            const result = await query(sql, params);
            return result.affectedRows > 0 ? result.insertId: null;
        } catch (error) {
            console.error('Error creating raw material:', error);
            throw error;
        }
    },

    async findRawMaterials  (): Promise<RawMaterial[]> {
    try {
        let sql = 'SELECT * FROM raw_materials';
        let values: (number)[] = [];
        sql += ' ORDER BY date DESC, created_at DESC';

        const results = await query(sql, values);
        return results as RawMaterial[] || [];
    } catch (error) {
        console.error('Error finding raw materials:', error);
        throw error;
    }
},

    async findRawMaterialById(id: number): Promise<RawMaterial | null> {
        try {
            const sql = 'SELECT * FROM raw_materials WHERE id = ? LIMIT 1';
            const results = await query(sql, [id]);
            return results[0] as RawMaterial ?? null;
        } catch (error) {
            console.error('Error finding raw material by ID:', error);
            throw error;
        }
    },

    async updateRawMaterial(
    id: number,
    updatedData: Partial<RawMaterial>
  ): Promise<boolean> {
    try {
      const fields = Object.keys(updatedData);
      if (fields.length === 0) return false;

      const setClause = fields
        .map(field => `${field.replace(/([A-Z])/g, '_$1').toLowerCase()} = ?`)
        .join(', ');

      const values = fields.map(field => (updatedData as any)[field]);

      const sql = `UPDATE raw_materials SET ${setClause} WHERE id = ?`;
      const result = await query(sql, [...values, id]);

      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error updating raw material in model:", error);
      throw error;
    }
  },

    async deleteRawMaterialWithId(id: number): Promise<boolean> {
        try {
            const sql = 'DELETE FROM raw_materials WHERE id = ?';
            const result = await query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting raw material:', error);
            throw error;
        }
    }
}

