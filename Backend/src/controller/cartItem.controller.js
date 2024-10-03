import { updateCartItems } from "../services/cartItem.service.js"


const updatedCartItem=async(req,res)=>{
    const user = req.user;
    try {
        const updatedCartItem = await updateCartItems(user._id,req.params.id,req.body);
        return res.status(200).send(updatedCartItem);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}