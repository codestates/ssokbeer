import express from "express";
import { postComment, editComment, deleteComment } from "../controllers/commentController";
const commentRouter = express.Router();

commentRouter.route("/").post(postComment);

commentRouter.route("/:id").patch(editComment).delete(deleteComment);

export default commentRouter;
