import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql: string, values?: any[]): Promise<any> => {
  try {
    const [rows] = await pool.execute(sql, values);
    return rows;
  } catch (error) {
    console.error('MySQL query error:', error);
    const dbError = new Error('Database operation failed.');
    (dbError as any).status = 500; 
    throw dbError;
  }
};

// Test the connection with proper typing
pool.getConnection()
  .then((connection: mysql.PoolConnection) => {
    console.log('Successfully connected to MySQL database pool.');
    connection.release(); 
  })
  .catch((err: Error) => {
    console.error('Failed to connect to MySQL database pool:', err.message);
    process.exit(1);
  });