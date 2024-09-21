import User from "../models/user.model"
import bcrypt from 'bcrypt'
const createUser = async (userData) => {
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
}
const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error("user not found by id ", userId);
        }
        return user
    } catch (error) {
        throw new Error(error.message);

    }



}
const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("user not found by email ", email);
        }
        return user
    } catch (error) {
        throw new Error(error.message);

    }
}
//jwt
const  getUserProfileByToken = async (token)=>{

}
export {
    createUser,
    findUserById,
    findUserByEmail
}