import jwtProvider from "../config/jwtProvider.js";
import userService from "../services/user.service.js";
const jwtprovider = jwtProvider();
const userservice = userService();




const authenticate = async (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return req.status(404).send({error:"token not found ..."})
        }

        const userId= jwtprovider.getUserIdFromToken(token)
        const user = userservice.findUserById(userId);
        req.user = user 
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    next();
}
export{authenticate}