import CartItem from "../models/cartItem.model.js";
import userService from '../services/user.service.js'
const userservice = userService();


async function updateCartItems(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        if (!item) {
            throw new Error("cart item not found : ", cartItemId);

        }
        const user = await userservice.findUserById(item.userId);
        if (!user) {
            throw new Error("user not found ", userId);
        }
        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem

        }
        else {
            throw new Error("you cant update this cart item");

        }
    } catch (error) {
        throw new Error(error.message);

    }
}


async function removeCartItems(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userservice.findUserById(userId);


    if (user._id.toString() === cartItem.userId.toString()) {
        await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("you cant remove another user's item");


}
async function findCartItemById(cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    if (cartItem) {
        return cartItem
    }
    else {
        throw new Error("cart item not found with id ", cartItemId);

    }

}
export { updateCartItems, removeCartItems, findCartItemById }