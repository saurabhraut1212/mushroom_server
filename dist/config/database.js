"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
const query = (sql, values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield pool.execute(sql, values);
        return rows;
    }
    catch (error) {
        console.error('MySQL query error:', error);
        const dbError = new Error('Database operation failed.');
        dbError.status = 500;
        throw dbError;
    }
});
exports.query = query;
// Test the connection with proper typing
pool.getConnection()
    .then((connection) => {
    console.log('Successfully connected to MySQL database pool.');
    connection.release();
})
    .catch((err) => {
    console.error('Failed to connect to MySQL database pool:', err.message);
    process.exit(1);
});
