import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createOrder, findOrderById, orderHistory } from '../controller/order.controller.js';


router.post("/",authenticate,createOrder);
router.get("/user",authenticate,orderHistory);
router.get(":id",authenticate,findOrderById)
export default router