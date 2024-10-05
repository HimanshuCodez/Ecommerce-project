import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { removeCartItems, updateCartItems } from '../services/cartItem.service.js';

router.put("/:id",authenticate,updateCartItems)
router.delete("/:id",authenticate,removeCartItems)


export default router