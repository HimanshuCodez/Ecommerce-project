import userService from '../services/user.service.js'
import jwtProvider from '../config/jwtProvider.js'
import bcrypt from 'bcrypt'
import cartService from '../services/cart.service.js'
//madded hooks
const jwtprovider= jwtProvider();
const userservice= userService();


const authController = () => {
    return {
        register:async(req,res) =>{
    
            try {
                const user =await userservice.createUser(req.body)
                const jwt=jwtprovider.getUserIdFromToken(user._id);
            //user ke create hote hi cart bhi create ho jaye
                await cartService.createCart(user);
                return res.return(200).send({jwt,message:"register success"})
            
            
            } catch (error) {
                
            return res.status(500).send({error:error.message});
            } 
                
            },
            login:async(req, res) => {
                const { email, password } = req.body;
               try {
                const user = await userservice.getUserByEmail
                if (!user) {
                    return res.status(404).send({message:"user not founf by email:",email})
                }
                const isPasswordValid = await bcrypt.compare(password,user.password);
                if (!isPasswordValid) {
                    return res.status(401).send({message:"invalid password..."})
                    
                }
            const jwt=jwtprovider.generateToken(user._id);
            return res.status(200).send({jwt,message:"login successfull"})
               } catch (error) {
                return res.status(500).send({error:error.message});
               }
                   
            },
    }
    }

    export default authController