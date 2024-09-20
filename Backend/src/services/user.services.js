import User from "../models/user.model"
import bcrypt    from  'bcrypt'
const createUser=async(userData)=>{
    try {
        let {firstName,lastName,email,password} =userData
        const isUserExist=await User.findOne({email})

        if(isUserExist){
            throw new Error("user already exists with email",email);
        }
        password=await bcrypt.hash(password,8)
        const user=await User.create ({firstName,lastName,email,password})
        console.log("user created");
        
        return user
    } catch (error) {
        
    }
}