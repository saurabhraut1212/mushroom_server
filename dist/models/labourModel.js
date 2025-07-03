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
exports.labourModel = void 0;
const database_1 = require("../config/database");
exports.labourModel = {
    addLaboursData(labour) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `INSERT INTO labours (
        name, no_of_labours, per_labour_cost, total_cost, date
        ) VALUES (?,?,?,?,?)`;
                const params = [
                    labour.name,
                    labour.noOfLabours,
                    labour.ratePerLabour,
                    labour.totalCost,
                    labour.date
                ];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result.insertId : null;
            }
            catch (error) {
                console.error('Error creating labours:', error);
                throw error;
            }
        });
    },
    fetchAllLabour() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * from labours order by date DESC';
                const results = yield (0, database_1.query)(sql);
                return results || [];
            }
            catch (error) {
                console.error('Error fetching labours:', error);
                throw error;
            }
        });
    },
    fetchLabourWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * from labours WHERE id=?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.length > 0 ? result[0] : null;
            }
            catch (error) {
                console.error('Error fetching labours with id:', error);
                throw error;
            }
        });
    },
    updateLabourById(id, labour) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `UPDATE labours SET
            name=?,no_of_labours=?,per_labour_cost=?,total_cost=?,date=?
            WHERE id=?`;
                const params = [
                    labour.name,
                    labour.noOfLabours,
                    labour.ratePerLabour,
                    labour.totalCost,
                    labour.date
                ];
                params.push(id);
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error updating labours:', error);
                throw error;
            }
        });
    },
    deleteLabourById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM labours WHERE id=?';
                const params = [id];
                const result = yield (0, database_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error('Error deleting labours:', error);
                throw error;
            }
        });
    }
};
