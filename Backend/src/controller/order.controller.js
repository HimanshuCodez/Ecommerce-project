import { createOrder, findOrderById, userOrderHistory } from "../services/orderService.js";

const createOrders = async (req, res) => {
    
    const user = req.user; // No need to await, user should already be attached by middleware
    try {
        let createdOrder = await createOrder(user, req.body);
        res.status(201).send(createdOrder); // Send the created order with status 201
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const findOrderByIds = async (req, res) => {
    const user = req.user; // No need to await
    try {
        let order = await findOrderById(req.params.id); // Find order by ID
        if (!order) {
            return res.status(404).send({ error: "Order not found" });
        }
        res.status(200).send(order); // Send found order with status 200
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const orderHistorys = async (req, res) => {
    const user = req.user; // No need to await
    try {
        let orderHistory = await userOrderHistory(user._id); // Fetch user's order history
        res.status(200).send(orderHistory); // Send the order history with status 200
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export {
    createOrders,
    findOrderByIds,
    orderHistorys
};
