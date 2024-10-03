import { getAllOrders, confirmedOrder, shipOrder, deliverOrder, cancelledOrder, deleteOrder } from "../services/orderService.js"

const getAllOrders = async(req,res)=>{
    try {
        const orders = await getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const confirmedOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try {
        const orders = await confirmedOrder(orderId) ;
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const shipOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try {
        const orders = await shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deliverOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try {
        const orders = await deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const cancelledOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try {
        const orders = await cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const deleteOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try {
        const orders = await deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export { 
getAllOrders,confirmedOrders,shipOrders,cancelledOrders,deleteOrders,deliverOrders
}