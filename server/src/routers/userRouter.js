import express from "express";
import { getProfile, getUserList, postJoin, postLogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getUserList);

userRouter.route("/join").post(postJoin);

userRouter.route("/profile").get(getProfile);

userRouter.route("/login").post(postLogin);

export default userRouter;
