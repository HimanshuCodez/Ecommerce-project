import express from 'express'
const router=express.Router();

import { addItemToCart, findUserCart } from '../controller/cart.controller.js';
import { authenticate } from '../middlewares/authenticate.js';


router.get("/",authenticate,findUserCart);
router.put("/add",authenticate,addItemToCart);

export default router