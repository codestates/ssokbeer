import express from "express";
import {
  getProfile,
  getUserList,
  postSignup,
  postLogin,
  editProfile,
  logout,
  signout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getUserList);

userRouter.route("/signup").post(postSignup);
userRouter.route("/signout").get(signout);

userRouter.route("/profile").get(getProfile).post(editProfile);

userRouter.route("/login").post(postLogin);
userRouter.route("/logout").get(logout);

export default userRouter;
