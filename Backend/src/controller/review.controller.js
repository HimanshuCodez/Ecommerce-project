import { createReview,getAllReview } from "../services/review.service.js";



const createReviews = async(res,req)=>{
    const user = req.user;
try {
    const review = await createReview(req.body,user)
    return res.status(201).send(review)
} catch (error) {
    return res.status(500).send({error:error.message})
}
}
const getAllReviews = async(res,req)=>{
    const productId= req.params.productId
    const user = req.user;
try {
    const reviews = await getAllReview(productId)
    return res.status(201).send(reviews)
} catch (error) {
    return res.status(500).send({error:error.message})
}
}

export{
    createReviews,getAllReviews
}































