import { createReview } from "../services/review.service.js";


const createReview = async(res,req)=>{
    const user = req.user;
try {
    const review = await createReview(req.body,user)
} catch (error) {
    
}
}
































