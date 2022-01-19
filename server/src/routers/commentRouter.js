import express from "express";
import { postComment, editCommet } from "../controllers/commentController";
const commentRouter = express.Router();

commentRouter.route("/").post(postComment);

commentRouter.route("/:id").post(editCommet);

export default commentRouter;
