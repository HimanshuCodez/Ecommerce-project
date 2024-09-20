import mongoose from "mongoose";

const cartItemsSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required :true,
    },
    product:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required :true,
    },
    size:{ 
        type:String,
       required:true

    },
    quantity:{ 
        type:Number,
       required:true,
       default:1

    },
    price:{ 
        type:Number,
       required:true,

    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
       },
})

const cartItems = mongoose.model("cartItems",cartItemsSchema)
export default cartItems