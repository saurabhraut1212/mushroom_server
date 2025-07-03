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
exports.HarvestModel = void 0;
const database_1 = require("../config/database");
exports.HarvestModel = {
    addHarvestData(harvest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `
                INSERT INTO harvest (
                    mushroom_type, total_weight, no_of_bags, section, date_of_harvest
                ) VALUES (?, ?, ?, ?, ?)
            `;
                const params = [
                    harvest.mushroomType,
                    harvest.totalWeight,
                    harvest.noOfBags,
                    harvest.section,
                    harvest.dateOfHarvest
                ];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating harvest:', error);
                throw error;
            }
        });
    },
    getAllHarvestsData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM harvest ORDER BY date_of_harvest DESC, created_at DESC';
                const result = yield (0, database_1.query)(sql);
                return result || [];
            }
            catch (error) {
                console.error('Error fetching all harvest data:', error);
                throw error;
            }
        });
    },
    getHarvestDataById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM harvest WHERE id = ?';
                const params = [id];
                const results = yield (0, database_1.query)(sql, params);
                return results.length > 0 ? results[0] : null;
            }
            catch (error) {
                console.error('Error fetching harvest by ID:', error);
                throw error;
            }
        });
    },
    updateHarvestData(id, harvest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `
                UPDATE harvest SET
                    mushroom_type = ?, total_weight = ?, no_of_bags = ?,
                    section = ?, date_of_harvest = ?
                WHERE id = ?
            `;
                const params = [
                    harvest.mushroomType,
                    harvest.totalWeight,
                    harvest.noOfBags,
                    harvest.section,
                    harvest.dateOfHarvest,
                    id
                ];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error updating harvest data:', error);
                throw error;
            }
        });
    },
    deleteHarvestData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM harvest WHERE id = ?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting harvest data:', error);
                throw error;
            }
        });
    }
};
