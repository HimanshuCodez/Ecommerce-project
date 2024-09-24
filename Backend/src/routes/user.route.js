import express from 'express'
import userController from '../controller/user.controller.js'
const usercontroller= userController();

const router=express.Router();
router.get("/profile",usercontroller.getUserProfile);
router.get("/",usercontroller.getAllUsers);

export default router