import express from 'express'

const router=express.Router();
import userController from '../controller/user.controller.js'
const usercontroller= userController();

router.get("/profile",usercontroller.getUserProfile);
router.get("/",usercontroller.getAllUsers);

export default router