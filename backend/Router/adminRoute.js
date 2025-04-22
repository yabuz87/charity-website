import express from "express";
import { checkAuth, login, logout, signup } from "../adminController/authController.js";
import { protectRoute } from "../middleware/admin.middleware.js";
const adminRoute=express.Router();
 adminRoute.post("/signup",signup);
 adminRoute.post('/login',login);
 adminRoute.post('/logout',logout)
 adminRoute.get('/checkAuth',checkAuth);
 export default adminRoute;