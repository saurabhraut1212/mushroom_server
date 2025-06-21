import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel";
import { generateToken } from "../utilities/generateToken";
import { User } from "../types/user";
import { UserRegistrationData } from "../types/auth";

const registerUser = async (userData: UserRegistrationData):Promise<{message:string}> => {
    try {
        const { email, password } = userData;
        
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }

        const existingUser = await UserModel.findExistingUser(email);
        if (existingUser) {
            throw new Error("User already exists with this email.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: Omit<User, 'id' | 'created_at' | 'updated_at'> = {
            email,
            password: hashedPassword
        };

        const createdUser = await UserModel.createUser(newUser);
        if (!createdUser) {
            throw new Error("Failed to create user.");
        }
        return {
            message: "User registered successfully",
        }

    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

const loginUser = async (userData: UserRegistrationData): Promise<{ user: Omit<User, 'password'>; token: string }> => {
    try {
        const { email, password } = userData;

        if (!email || !password) {
            throw new Error("Email and password are required.");
        }

        const user = await UserModel.findExistingUser(email);
        if (!user) {
            throw new Error("User with that email does not exist");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        } 

        const token = generateToken({ id: user.id, email: user.email });
        
        // Create a new user object without the password
        const { password: _, ...userWithoutPassword } = user;
        
        return { 
            user: userWithoutPassword, 
            token 
        };

    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export default {
    registerUser,   
    loginUser
};