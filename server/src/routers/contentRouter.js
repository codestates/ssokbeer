import express from "express";
import {
  getAllContent,
  getContent,
  postContent,
  updateContent,
} from "../controllers/contentController";
const contentRouter = express.Router();

contentRouter.route("/").get(getAllContent).post(postContent);
contentRouter.route("/:id").get(getContent);
contentRouter.route("edit/:id").get(getContent).post(updateContent);
export default contentRouter;
