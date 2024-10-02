import Rating from "../models/ratings.model.js";
import { findProductById } from "../services/product.service.js";

async function createRating(req,user){
    const product = await findProductById(req.productId);

    const rating= new Rating({
        user:user._id,
        product:product._id,
rating:req.rating,
createdAt :new Date()    
})

return await rating.save();
}

async function getProductRating(productId) {

    return await Rating.find ({product:productId});
    
}
export {createRating,
    getProductRating
}