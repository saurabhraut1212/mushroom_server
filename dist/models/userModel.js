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
exports.UserModel = void 0;
const database_1 = require("../config/database");
exports.UserModel = {
    findExistingUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const sql = 'SELECT * FROM users WHERE email = ? LIMIT 1';
                const results = yield (0, database_1.query)(sql, [email]);
                return (_a = results[0]) !== null && _a !== void 0 ? _a : null;
            }
            catch (error) {
                console.error('Error finding user:', error);
                throw error;
            }
        });
    },
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `
                INSERT INTO users (email, password) 
                VALUES (?, ?)
            `;
                const result = yield (0, database_1.query)(sql, [userData.email, userData.password]);
                return result.affectedRows > 0 ? result : null;
            }
            catch (error) {
                console.error('Error creating user:', error);
                throw error;
            }
        });
    },
};
