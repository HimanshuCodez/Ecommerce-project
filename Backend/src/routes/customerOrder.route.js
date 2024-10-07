import express from 'express'
const router=express.Router();
import { authenticate } from '../middlewares/authenticate.js';
import { createOrders, findOrderByIds, orderHistorys } from '../controller/order.controller.js';


router.post("/",authenticate,createOrders);
router.get("/user",authenticate,orderHistorys);
router.get(":id",authenticate,findOrderByIds)
export default router