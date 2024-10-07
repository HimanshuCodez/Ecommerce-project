import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        
 },
 orderItems:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orderItems",
    
 }],
 orderDate:{
    type:Date,
    required:true,
    default:Date.now()
 },
 deliveryDate:{
    type:Date,
  
 },
 shippingAddress:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"addresses"
 },
 paymentDetails:{
paymentMethod:{
    type:String,
},
transactionId:{
    type:String,
},
paymentId:{
    type:String,
},
paymentStatus:{
    type:String,
    default:"PENDING"
}
 },
 totalPrice:{
    type:Number,
    required : true,
 
 },
 totalItem:{
    type:Number,
    required:true,
 },
 totalDiscountedPrice:{
    type:Number,
    required:true,
 },
 discount:{
    type:Number,
    default:0,
    required:true,
 },
 orderStatus:{
    type:String,
    required:true,
     default:"PENDING",
 },
 createdAt:{
    type:Date,
    default:Date.now
 }
 
})


const Order= mongoose.model("orders",orderSchema)
export default Order