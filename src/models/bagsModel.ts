import { query } from "../config/database";
import { Bag } from "../types/bags";

export const BagsModel={

    async createBag(bag: Bag): Promise<Bag | null> {
        try {
            const sql = `
                INSERT INTO bags (
                mushroom_type, no_of_bags, section, spawn_quantity, date 
                ) VALUES (?, ?, ?, ?, ?)
            `;
            
            const params = [
                bag.mushroomType,
                bag.noOfBags,
                bag.section,
                bag.spawnQuantity,
                bag.date
            ];

            const result = await query(sql, params);
            return result.affectedRows > 0 ? result.insertId: null;
        } catch (error) {
            console.error('Error creating bags:', error);
            throw error;
        }

   },

   async getAllBags():Promise<Bag[]>{
    try {
        const sql = 'SELECT * FROM bags ORDER BY date DESC, created_at DESC';
        const results = await query(sql);
        return results as Bag[] || [];
        
    } catch (error) {
        console.error('Error fetching bags:',error)
        throw error;
    }
   },

   async getBagById(id:number):Promise<Bag | null>{
    try {
        const sql= 'SELECT * FROM bags WHERE id = ?';
        const params = [id];
        const results = await query(sql, params);
        return results.length > 0 ? results[0] : null;

    } catch (error) {
        console.error('Error fetching bag by ID:',error);
        throw error;
    }
   },

   async updateBagById(id:number,bag:Bag):Promise<Bag | null>{
    try {
        const sql=`UPDATE bags SET
            mushroom_type=?,no_of_bags=?,section=?,spawn_quantity=?,date=?
            WHERE id=?`;
        const params=[
            bag.mushroomType,
            bag.noOfBags,
            bag.section,
            bag.spawnQuantity,
            bag.date

        ]
        params.push(id);
        const result=await query(sql,params);
        console.log('Update result:', result);
        return result.affectedRows > 0 ? result : null;
    } catch (error) {
        console.error('Error updating bag by ID:',error);
        throw error;
    }
   },

   async deleteBagWithId(id:number):Promise<boolean>{
    try {
        const sql='DELETE FROM bags WHERE id=?';
        const params=[id];
        const result=await query(sql,params);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error deleting bag by ID:',error);
        throw error;
        
    }
   }
}