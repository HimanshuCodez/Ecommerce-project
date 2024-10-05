import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createRating, getAllRating, } from '../controller/rating.controller.js';




router.post("/create",authenticate,createRating)
router.put("/product/:productId",authenticate,getAllRating)




export default router