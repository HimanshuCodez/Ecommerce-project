import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwtProvider from '../config/jwtProvider.js'
const jwtprovider= jwtProvider();
const userService = () => {
    return {
        createUser: async (userData) => {
            try {
                let { firstName, lastName, email, password } = userData
                const isUserExist = await User.findOne({ email })

                if (isUserExist) {
                    throw new Error("user already exists with email", email);
                }
                password = await bcrypt.hash(password, 8)
                const user = await User.create({ firstName, lastName, email, password })
                console.log("user created", user);

                return user

            } catch (error) {
                throw new Error(error.message);

            }
        },
        findUserById: async (userId) => {
            try {
                const user = await User.findById(userId).populate("address")
                if (!user) {
                    throw new Error("user not found by id ", userId);
                }
                return user
            } catch (error) {
                throw new Error(error.message);

            }



        },
        getUserByEmail :async (email) => {
            try {
                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("user not found by email ", email);
                }
                return user
            } catch (error) {
                throw new Error(error.message);
        
            }
        },
        getUserProfileByToken :async (token) => {
            try {
                const userId = jwtprovider.getUserIdFromToken(token)
                const user = await findUserById(userId)
                if (!user) {
                    throw new Error("user not found with id :", userId)
                }
                return user;
            } catch (error) {
                throw new Error("error.message");
        
            }
        
        },
        getAllUsers: async () => {
            try {
                const user = await User.find()
                return users;
            } catch (error) {
                throw new Error("error.message");
        
            }
        },
    }
}
export default userService

//populate se andr ki fields nhi milegi like zip code, number usse jisko populate kr rhe h uski object id milti h jisse hm sbhi address field ki defined properties ko access kr skte h 



