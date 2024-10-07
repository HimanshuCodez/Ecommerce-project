
import { createRating,getProductRating } from "../services/rating.service.js";

const createRatings = async(res,req)=>{
    const user = req.user;
try {
    const review = await createRating(req.body,user)
    return res.status(201).send(review)
} catch (error) {
    return res.status(500).send({error:error.message})
}
}
const getAllRatings = async(res,req)=>{
    const productId= req.params.productId
    const user = req.user;
try {
    const reviews = await getProductRating(productId)
    return res.status(201).send(reviews)
} catch (error) {
    return res.status(500).send({error:error.message})
}
}
export {
    createRatings,getAllRatings
}