import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({

    product:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required :true,
    },
    size:{ 
        type:String,
      

    },
    quantity:{ 
        type:Number,
       required:true,
     

    },
    price:{ 
        type:Number,
       required:true,

    },
   
    
     discountedPrice:{
        type:Number,
        default:0,
        required:true,
     },
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
       },

})
const OrderItem= mongoose.model("orderItems",orderItemSchema)
export default OrderItem