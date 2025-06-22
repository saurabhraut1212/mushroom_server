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
exports.BagsModel = void 0;
const database_1 = require("../config/database");
exports.BagsModel = {
    createBag(bag) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating bags:', error);
                throw error;
            }
        });
    },
    getAllBags() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM bags ORDER BY date DESC, created_at DESC';
                const results = yield (0, database_1.query)(sql);
                return results || [];
            }
            catch (error) {
                console.error('Error fetching bags:', error);
                throw error;
            }
        });
    },
    getBagById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM bags WHERE id = ?';
                const params = [id];
                const results = yield (0, database_1.query)(sql, params);
                return results.length > 0 ? results[0] : null;
            }
            catch (error) {
                console.error('Error fetching bag by ID:', error);
                throw error;
            }
        });
    },
    updateBagById(id, bag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `UPDATE bags SET
            mushroom_type=?,no_of_bags=?,section=?,spawn_quantity=?,date=?
            WHERE id=?`;
                const params = [
                    bag.mushroomType,
                    bag.noOfBags,
                    bag.section,
                    bag.spawnQuantity,
                    bag.date
                ];
                params.push(id);
                const result = yield (0, database_1.query)(sql, params);
                console.log('Update result:', result);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error updating bag by ID:', error);
                throw error;
            }
        });
    },
    deleteBagWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM bags WHERE id=?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting bag by ID:', error);
                throw error;
            }
        });
    }
};
