import Address from "../models/address.model.js";
import cartService from "../services/cart.service.js"
const cartservice = cartService();

async function CreateOrder(user,shippAddress){
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

const createdOrder = new Order({
    user,
    orderItems,
    totalPrice:cart.totalPrice,
    totalDiscountedPrice : cart.totalDiscountedPrice,
    discount:cart.discount,
    totalItem :cart.totalItem,
    shippAddress:address,
    
})



const savedOrder= await createdOrder.save();
return savedOrder;
}