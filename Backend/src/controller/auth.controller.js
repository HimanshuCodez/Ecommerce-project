import {userService} from '../services/user.services.js'
import {jwtProvider} from '../services/jwtProvider.js'
import bcrypt from 'bcrypt'
import cartService from '../services/cart.service.js'
const register =async(req,res) =>{
try {
    const user =await userService.createUser(req.body)
    const jwt=jwtProvider.generateToken(user._id);
//user ke create hote hi cart bhi create ho jaye
    await cartService.createCart(user);
    return res.return(200).send({jwt,message:"register success"})


} catch (error) {
    
return res.status(500).send({error:error.message});
} 
    
}
 const login = async(req, res) => {
    const { email, password } = req.body;
   try {
    const user = await userService.getUserByEmail
    if (!user) {
        return res.status(404).send({message:"user not founf by email:",email})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if (!isPasswordValid) {
        return res.status(401).send({message:"invalid password..."})
        
    }
const jwt=jwtProvider.generateToken(user._id);
return res.status(200).send({jwt,message:"login successfull"})
   } catch (error) {
    return res.status(500).send({error:error.message});
   }
       
}
export {register,login}