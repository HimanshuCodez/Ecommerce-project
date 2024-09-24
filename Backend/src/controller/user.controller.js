import userService from '../services/user.service.js'
const userservice= userService();

const userController = () => {
    return {
        getUserProfile: async (req,res) => {
            try {
                //jb token aayega to split se array bnakr uske 1th index ki value lelinge ex:[bearer,token]
                const jwt=req.headers.authorization?.split(" ")[1];
                if (!jwt) {
                    return res.status(400).send({error:"tokken not found"})
                }
        const user = await userservice.getUserProfileByToken(jwt)
        return res.status(200).send(user);
            } catch (error) {
                return res.status(500).send({error:error.message})
            }
        },
        getAllUsers:async () => {
            try {
                const users=await userservice.getAllUsers();
                return res.status(200).send(users)
            } catch (error) {
               
                return res.status(500).send({error:error.message})
            }
        },
    }
    }
export default  userController


