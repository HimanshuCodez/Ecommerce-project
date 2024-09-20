import mongoose, { Mongoose } from "mongoose";

const reviewSchema = new Mongoose({
review:{
    type:String,
    required:true,
},
product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"products"
},
user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
 },
 createdAt:{
    type:Date,
    default:Date.now()
 },
})
const Review = mongoose.model("reviews",reviewSchema)
export default Review