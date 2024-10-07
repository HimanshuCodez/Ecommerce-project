import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createReviews, getAllReviews } from '../controller/review.controller.js';



router.post("/create",authenticate,createReviews)
router.get("/product/:productId",authenticate,getAllReviews)




export default router