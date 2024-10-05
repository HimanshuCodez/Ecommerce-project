import express from 'express'
const router=express.Router();

import { cancelledOrders, confirmedOrders, deleteOrders, deliverOrders, getAllOrders, shipOrders } from '../controller/adminOrder.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
//next processeds to next middleware
router.get("/",authenticate,getAllOrders)
router.get("/:orderId/confirmed",authenticate,confirmedOrders)
router.get("/:orderId/ship",authenticate,shipOrders)
router.get("/:orderId/deliver",authenticate,deliverOrders)
router.get("/:orderId/cancel",authenticate,cancelledOrders)
router.get("/:orderId/delete",authenticate,deleteOrders)

export default router
