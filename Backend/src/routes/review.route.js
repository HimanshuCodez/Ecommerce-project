import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createReview, getAllReview } from '../controller/review.controller.js';



router.post("/create",authenticate,createReview)
router.get("/product/:productId",authenticate,getAllReview)




export default router