import cartService from "../services/cart.service.js";

const cartservice = cartService();

const findUserCart = async (req,res)=>{
    const user = req.user;
    try {
        const cart = await cartservice.findUserCart(user._id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const addItemToCart = async (req,res)=>{
    const user = req.user;
    try {
        const cartItem = await cartservice.addCartItem(user._id,req.body);
        return res.status(200).send(cartItem);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export { findUserCart,addItemToCart}




