import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
 },
 cartItems:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cartItems",
    required :true,
 }],
 totalPrice:{
    type:Number,
    required : true,
    default:0
 },
 totalItem:{
    type:Number,
    default:0,
    required:true,
 },
 totalDiscountedPrice:{
    type:Number,
    default:0,
    required:true,
 },
 discount:{
    type:Number,
    default:0,
    required:true,
 },
})


const Cart= mongoose.model("cart",cartSchema)
export default Cart