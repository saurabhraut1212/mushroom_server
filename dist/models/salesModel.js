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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModel = void 0;
const database_1 = require("../config/database");
exports.SalesModel = {
    addSalesData(sales) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating sales:', error);
                throw error;
            }
        });
    },
    fetchAllSalesData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM sales ORDER BY date_of_sale DESC, created_at DESC';
                const results = yield (0, database_1.query)(sql);
                return results || [];
            }
            catch (error) {
                console.error('Error fetching sales:', error);
                throw error;
            }
        });
    },
    fetchSalesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM sales WHERE id = ?';
                const params = [id];
                const results = yield (0, database_1.query)(sql, params);
                return results.length > 0 ? results[0] : null;
            }
            catch (error) {
                console.error('Error fetching sales by ID:', error);
                throw error;
            }
        });
    },
    updateSalesData(id, sales) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error updating sales:', error);
                throw error;
            }
        });
    },
    deleteSalesData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM sales WHERE id = ?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting sales:', error);
                throw error;
            }
        });
    }
};
