import Address from "../models/address.model.js";
import Order from "../models/order.model.js";
import cartService from "../services/cart.service.js"
const cartservice = cartService();

async function createOrder(user,shippAddress){
let address;
if (shippAddress._id) {
    let existAddress= await Address.findById(shippAddress._id)
    address=existAddress;
}
else{
    address= new Address(shippAddress);
    address.user=user;
    await address.save();

    user.addresses.push(address);
    await user.save();
}




const cart = await cartservice.findUserCart(user._id);
const orderItems=[];

for (const item of cart.cartItems){
    const orderItem= new orderItems({
        price:item.price,
        product:item.product,
        quantity:item.quantity,
        size:item.size,
        userId:item.userId,
        discountedPrice:item.discountedPrice,

    })
    const createdOrderItem= await orderItem.save();
    orderItems.push(createdOrderItem);
}
//created maybe
const createOrder = new Order({
    user,
    orderItems,
    totalPrice:cart.totalPrice,
    totalDiscountedPrice : cart.totalDiscountedPrice,
    discount:cart.discount,
    totalItem :cart.totalItem,
    shippAddress:address,
    
})



const savedOrder= await createOrder.save();
return savedOrder;
}

async function placeOrder(orderId){
    const   order = await findOrderById(orderId);
    order.orderStatus="PLACED"
    order.paymentDetails.status="COMPLETE"
    return await order.save();
}
async function confirmedOrder(orderId){
    const   order = await findOrderById(orderId);
    order.orderStatus="CONFIRMED";
    return await order.save();
}
async function shipOrder(orderId){
    const   order = await findOrderById(orderId);
    order.orderStatus="SHIPPED";
    return await order.save();
}
async function deliverOrder(orderId){
    const   order = await findOrderById(orderId);
    order.orderStatus="DELIVERED";
    return await order.save();
}
async function cancelledOrder(orderId){
    const   order = await findOrderById(orderId);
    order.orderStatus="CANCELLED";
    return await order.save();
}
async function findOrderById(orderId){
const order= await Order.findById(orderId)
.populate("user")
.populate({path:"orderItems",populate:{path:"product"}})
.populate("shippingAddress")
return order
}

async function userOrderHistory(userId) {
    try {
        const orders=await Order.find({user:userId,orderStatus:"PLACED"})
        .populate({path:"orderItems",populate:{path:"product"}}).lean()
        return orders
    } catch (error) {
        throw new Error(error.message);
        
    }
    
}
async function getAllOrders(){
    return await Order.find()
    .populate({path:"orderItems",populate:{path:"product"}}).lean()
}

async function deleteOrder(orderId){
    const order=await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}


export {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelledOrder,
    findOrderById,
    userOrderHistory,
    getAllOrders,
    deleteOrder
}
