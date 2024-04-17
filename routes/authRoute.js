import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../routes/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//route object

const router = express.Router();

//router
//Register }} Method Post

router.post("/register", registerController);

//login || POST

router.post("/login", loginController);

//test routes

router.get("/test", requireSignIn, isAdmin, testController);
export default router;