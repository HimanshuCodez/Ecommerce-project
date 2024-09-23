import userService from '../services/user.services.js'

const getUserProfile =async (req,res) => {
    try {
        //jb token aayega to split se array bnakr uske 1th index ki value lelinge ex:[bearer,token]
        const jwt=req.headers.authorization?.split(" ")[1];
        if (!jwt) {
            return res.status(400).send({error:"tokken not found"})
        }
const user = await userService.getUserProfileByToken(jwt)
return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers = async () => {
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
       
        return res.status(500).send({error:error.message})
    }
}

export { getUserProfile, getAllUsers}