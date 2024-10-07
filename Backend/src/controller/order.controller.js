import { createOrder,findOrderById, userOrderHistory } from "../services/orderService.js";



const createOrders = async (req,res)=>{
    const user= req.user;
    try {
        let createdOrder =await CreateOrder(user,req.body);
        res.status(201).send(createdOrder)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}
const findOrderByIds= async (req,res)=>{
    const user= req.user;
    try {
        let createdOrder =await findOrderById(req.params.id);
        res.status(201).send("createdOrder")
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}
const orderHistorys = async (req,res)=>{
    const user= req.user;
    try {
        let createOrder =await userOrderHistory(user._id);
        res.status(201).send("createdOrder")
    } catch (error) {
        return res.status(500).send({error:error.message})
    }

}

export {
    createOrders,findOrderByIds,orderHistorys
}