import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwtProvider from '../config/jwtProvider.js';

const jwtprovider = jwtProvider();

const userService = () => {
    return {
        createUser: async (userData) => {
            try {
                let { firstName, lastName, email, password, userName } = userData;

                const isUserExist = await User.findOne({ email });
                if (isUserExist) {
                    throw new Error("User already exists with email: " + email);
                }

                password = await bcrypt.hash(password, 8);

                // Only set userName if it's provided, otherwise don't include it
                const user = await User.create({ 
                    firstName, 
                    lastName, 
                    email, 
                    password,
                    userName: userName || undefined // Prevent inserting null value for userName
                });

                console.log("User created", user);
                return user;

            } catch (error) {
                throw new Error(error.message);
            }
        },
        findUserById: async (userId) => {
            try {
                const user = await User.findById(userId)
                // .populate("address");
                if (!user) {
                    throw new Error("User not found by ID: " + userId);
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
                const userId = jwtprovider.getUserIdFromToken(token);
                const user = await userService.findUserById(userId);
                if (!user) {
                    throw new Error("User not found with ID: " + userId);
                }
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        getAllUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    }
};

export default userService;
