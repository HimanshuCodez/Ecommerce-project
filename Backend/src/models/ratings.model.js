import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
 },
 createdAt:{
    type:Date,
    default:Date.now
 },
 rating:{
    type:Number,
    required:true,
 },
 product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"products",
    required:true,
 }
})

const Rating = mongoose.model("ratings",ratingSchema)
export default  Rating