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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = require("../models/userModel");
const generateToken_1 = require("../utilities/generateToken");
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = userData;
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }
        const existingUser = yield userModel_1.UserModel.findExistingUser(email);
        if (existingUser) {
            throw new Error("User already exists with this email.");
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = {
            email,
            password: hashedPassword
        };
        const createdUser = yield userModel_1.UserModel.createUser(newUser);
        if (!createdUser) {
            throw new Error("Failed to create user.");
        }
        return {
            message: "User registered successfully",
        };
    }
    catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
});
const loginUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = userData;
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }
        const user = yield userModel_1.UserModel.findExistingUser(email);
        if (!user) {
            throw new Error("User with that email does not exist");
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        const token = (0, generateToken_1.generateToken)({ id: user.id, email: user.email });
        // Create a new user object without the password
        const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
        return {
            user: userWithoutPassword,
            token
        };
    }
    catch (error) {
        console.error("Login error:", error);
        throw error;
    }
});
exports.default = {
    registerUser,
    loginUser
};
