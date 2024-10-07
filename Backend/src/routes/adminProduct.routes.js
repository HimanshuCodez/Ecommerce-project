import express from 'express'
import { authenticate } from '../middlewares/authenticate.js';
import { createMultipleProducts, createProducts, deleteProducts, updateProducts } from '../controller/product.controller.js';
const router=express.Router();



router.post("/",authenticate,createProducts)
router.post("/creates",authenticate,createMultipleProducts)
router.delete("/:id",authenticate,deleteProducts)
router.put("/:id",authenticate,updateProducts)




export default router