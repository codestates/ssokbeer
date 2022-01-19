import express from "express";
import { postComment } from "../controllers/commentController";
const commentRouter = express.Router();

commentRouter
  .route("/")
  .get(() => {})
  .post(postComment);

export default commentRouter;
