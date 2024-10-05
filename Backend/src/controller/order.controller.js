import { CreateOrder,findOrderById, userOrderHistory } from "../services/orderService.js";



const createOrder = async (req,res)=>{
    const user= req.user;
    try {
        let createdOrder =await CreateOrder(user,req.body);
        res.status(201).send(createdOrder)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}
const findOrderById = async (req,res)=>{
    const user= req.user;
    try {
        let createdOrder =await findOrderById(req.params.id);
        res.status(201).send("createdOrder")
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}
const orderHistory = async (req,res)=>{
    const user= req.user;
    try {
        let createOrder =await userOrderHistory(user._id);
        res.status(201).send("createdOrder")
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}

export {
    createOrder,findOrderById,orderHistory
}