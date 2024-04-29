import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../routes/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//route object

const router = express.Router();

//router
//Register }} Method Post

router.post("/register", registerController);

//login || POST

router.post("/login", loginController);

//Forgot Password || Post

router.post("/forgot-password", forgotPasswordController);

//test routes

router.get("/test", requireSignIn, isAdmin, testController);

//protected user route auth

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth

router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
