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
exports.SpawnModel = void 0;
const database_1 = require("../config/database");
exports.SpawnModel = {
    addSpawnData(spawn) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating spawn:', error);
                throw error;
            }
        });
    },
    getAllSpawnData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM spawn ORDER BY date_of_purchase DESC, created_at DESC';
                const results = yield (0, database_1.query)(sql);
                return results || [];
            }
            catch (error) {
                console.error('Error fetching all spawn data:', error);
                throw error;
            }
        });
    },
    getSpawnWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM spawn WHERE id = ?';
                const params = [id];
                const results = yield (0, database_1.query)(sql, params);
                return results.length > 0 ? results[0] : null;
            }
            catch (error) {
                console.error('Error fetching spawn by ID:', error);
                throw error;
            }
        });
    },
    updateSpawnData(id, spawn) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error updating spawn data:', error);
                throw error;
            }
        });
    },
    deleteSpawnData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM spawn WHERE id = ?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting spawn data:', error);
                throw error;
            }
        });
    }
};
