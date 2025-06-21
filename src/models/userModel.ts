import { query } from '../config/database';
import { User } from '../types/user';

export const UserModel = {
   
    async findExistingUser(email: string): Promise<User | null> {
        try {
            const sql = 'SELECT * FROM users WHERE email = ? LIMIT 1';
            const results = await query(sql, [email]);
            return results[0] as User ?? null;
        } catch (error) {
            console.error('Error finding user:', error);
            throw error;
        }
    },

   
    async createUser(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> {
        try {
            const sql = `
                INSERT INTO users (email, password) 
                VALUES (?, ?)
            `;
            const result = await query(sql, [userData.email, userData.password]);
           return result.affectedRows > 0 ? result:null;

        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

   
};