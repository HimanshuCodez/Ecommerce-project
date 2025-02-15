import express from 'express'
const router=express.Router()
import authController from '../controller/auth.controller.js';
const authcontroller= authController();


router.post("/signup",authcontroller.register)
router.post("/login",authcontroller.login)

export default router