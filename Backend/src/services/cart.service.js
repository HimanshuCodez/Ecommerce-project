import Cart from '../models/cart.model.js'
import CartItem from '../models/cartItem.model.js';
import Product from '../models/product.model.js';

const cartService = () => {
    return {
        // Method to create a new cart
        createCart: async (user) => {
            try {
                const cart = new Cart({ user });
                const createdCart = await cart.save();
                return createdCart;
            } catch (error) {
                throw new Error(error.message);
            }
        },

        // Method to find user cart
        findUserCart: async (userId) => {
            try {
                let cart = await Cart.findOne({ user: userId });  // Fixed userId reference

                let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
                cart.cartItems = cartItems;

                let totalPrice = 0;
                let totalDiscountedPrice = 0;
                let totalItem = 0;

                for (let cartItem of cart.cartItems) {
                    totalPrice += cartItem.price;
                    totalDiscountedPrice += cartItem.totalDiscountedPrice;
                    totalItem += cartItem.quantity;
                }

                cart.totalPrice = totalPrice;
                cart.totalItem = totalItem;
                cart.discount = totalPrice - totalDiscountedPrice;

                return cart;
            } catch (error) {
                throw new Error(error.message);
            }
        },

        // Method to add an item to the cart
        addCartItem: async (userId, req) => {
            try {
                const cart = await Cart.findOne({ user: userId });
                const product = await Product.findById(req.productId);

                const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
                if (!isPresent) {
                    const cartItem = new CartItem({
                        product: product._id,
                        cart: cart._id,
                        quantity: 1,
                        userId,
                        price: product.price,
                        size: req.size,
                        discountedPrice: product.discountedPrice,
                    });

                    const createdCartItem = await cartItem.save();
                    cart.cartItems.push(createdCartItem);
                    await cart.save();
                    return "Item added to Cart";
                }
            } catch (error) {
                throw new Error(error.message);
            }
        }
    }
}

export default cartService;
