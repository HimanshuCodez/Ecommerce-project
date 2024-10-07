import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createRatings, getAllRatings, } from '../controller/rating.controller.js';




router.post("/create",authenticate,createRatings)
router.put("/product/:productId",authenticate,getAllRatings)




export default router