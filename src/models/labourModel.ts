import {query} from "../config/database";
import { Labour } from "../types/labour";

export const labourModel={
    async addLaboursData(labour:Labour):Promise<Labour | null>{
      try {
        const sql=`INSERT INTO labours (
        name, no_of_labours, per_labour_cost, total_cost, date
        ) VALUES (?,?,?,?,?)`;
         const params=[
            labour.name,
            labour.noOfLabours,
            labour.ratePerLabour,
            labour.totalCost,
            labour.date
         ]

         const result = await query(sql, params);
         return result.affectedRows > 0 ? result.insertId: null;
      } catch (error) {
         console.error('Error creating labours:', error);
         throw error;
      }
    },

    async fetchAllLabour():Promise<Labour []>{
        try {
            const sql='SELECT * from labours order by date DESC';
            const results = await query(sql);
            return results as Labour[] || [];
            
        } catch (error) {
        console.error('Error fetching labours:', error);
        throw error;
        }
    },

    async fetchLabourWithId(id:number):Promise<Labour | null>{
        try {
            const sql='SELECT * from labours WHERE id=?'
            const params=[id];
            const result=await query(sql,params);
              return result.length > 0 ? result[0] : null;
        } catch (error) {
        console.error('Error fetching labours with id:', error);
        throw error;
        }
    },

    async updateLabourById(id:number,labour:Labour):Promise<Labour | null>{
        try {
            const sql=`UPDATE labours SET
            name=?,no_of_labours=?,per_labour_cost=?,total_cost=?,date=?
            WHERE id=?`;
        const params=[
            labour.name,
            labour.noOfLabours,
            labour.ratePerLabour,
            labour.totalCost,
            labour.date

        ]
        params.push(id);
        const result=await query(sql,params);
        return result.affectedRows > 0 ? result : null;
        } catch (error) {
        console.error('Error updating labours:', error);
        throw error;
        }
    },

    async deleteLabourById(id:number):Promise<boolean>{
        try {
            const sql='DELETE FROM labours WHERE id=?';
            const params=[id];
            const result=await query(sql,params);
            return result.affectedRows > 0;
        } catch (error) {
        console.error('Error deleting labours:', error);
        throw error;
        }
    }
}