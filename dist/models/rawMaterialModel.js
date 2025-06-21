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
exports.RawMaterialModel = void 0;
const database_1 = require("../config/database");
exports.RawMaterialModel = {
    createRawMaterial(rawMaterial) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating raw material:', error);
                throw error;
            }
        });
    },
    findRawMaterials() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = 'SELECT * FROM raw_materials';
                let values = [];
                sql += ' ORDER BY date DESC, created_at DESC';
                const results = yield (0, database_1.query)(sql, values);
                return results || [];
            }
            catch (error) {
                console.error('Error finding raw materials:', error);
                throw error;
            }
        });
    },
    findRawMaterialById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql = 'SELECT * FROM raw_materials WHERE id = ? LIMIT 1';
                const results = yield (0, database_1.query)(sql, [id]);
                return (_a = results[0]) !== null && _a !== void 0 ? _a : null;
            }
            catch (error) {
                console.error('Error finding raw material by ID:', error);
                throw error;
            }
        });
    },
    updateRawMaterial(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fields = Object.keys(updatedData);
                if (fields.length === 0)
                    return false;
                const setClause = fields
                    .map(field => `${field.replace(/([A-Z])/g, '_$1').toLowerCase()} = ?`)
                    .join(', ');
                const values = fields.map(field => updatedData[field]);
                const sql = `UPDATE raw_materials SET ${setClause} WHERE id = ?`;
                const result = yield (0, database_1.query)(sql, [...values, id]);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error("Error updating raw material in model:", error);
                throw error;
            }
        });
    },
    deleteRawMaterialWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM raw_materials WHERE id = ?';
                const result = yield (0, database_1.query)(sql, [id]);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting raw material:', error);
                throw error;
            }
        });
    }
};
