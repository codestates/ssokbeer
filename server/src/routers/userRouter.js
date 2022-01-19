import express from "express";
import {
  getProfile,
  getUserList,
  postJoin,
  postLogin,
  editProfile,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getUserList);

userRouter.route("/join").post(postJoin);

userRouter.route("/profile").get(getProfile).post(editProfile);

userRouter.route("/login").post(postLogin);

export default userRouter;
