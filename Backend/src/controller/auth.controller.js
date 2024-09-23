import {userService} from '../services/user.services.js'
import {jwtProvider} from '../services/jwtProvider.js'
const register =async(req,res) =>{
try {
    const user =await userService.createUser(req.body)
    const jwt=jwtProvider.generateToken(user._id);
//user ke create hote hi cart bhi create ho jaye
    // await cartService.createCart(user);
    return res.return(200).send({jwt,message:"register success"})


} catch (error) {
    
return res.status(500).send({error:error.message});

}
    
    
}