import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwtProvider from "../config/jwtProvider.js";
import mongoose from "mongoose";

const jwtprovider = jwtProvider();

const userService = () => {
    return {
        createUser: async (userData) => {
            try {
                let { firstName, lastName, email, password } = userData;
                const isUserExist = await User.findOne({ email });

                if (isUserExist) {
                    throw new Error("User already exists with email: " + email);
                }

                password = await bcrypt.hash(password, 8);
                const user = await User.create({ firstName, lastName, email, password });

                console.log("User created", user);
                return user;
            } catch (error) {
                console.log("User not created", error);
                throw new Error(error.message);
            }
        },

        findUserById: async (userId) => {
            try {
                if (!mongoose.Types.ObjectId.isValid(userId)) {
                    throw new Error("Invalid User ID");
                }
                const user = await User.findById(userId).populate("address");

                if (!user) {
                    throw new Error("User not found");
                }

                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },

        getUserByEmail: async (email) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("User not found by email: " + email);
                }
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },

        getUserProfileByToken: async (token) => {
            try {
                const decoded = jwtprovider.verifyToken(token); // ✅ Decode token properly
                return await User.findById(decoded.userId);
            } catch (error) {
                throw new Error(error.message);
            }
        },

        getAllUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error(error.message);
            }
        },
    };
};



export default userService;
