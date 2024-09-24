import express from 'express'
import authController from '../controller/auth.controller.js';
const authcontroller= authController();

const router=express.Router()
router.post("/signup",authcontroller.register)
router.post("/signin",authcontroller.login)

export default router