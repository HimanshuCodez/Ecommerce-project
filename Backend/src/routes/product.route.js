import express from 'express'
import { authenticate } from '../middlewares/authenticate.js';
import { findProductById, getAllProducts } from '../controller/product.controller.js';
const router=express.Router();

router.get("/",authenticate,getAllProducts)
router.get("/id/:id",authenticate,findProductById)



export default router