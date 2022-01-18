import express from "express";
import {
  getAllContent,
  getContent,
  postContent,
  updateContent,
} from "../controller/contentController";
const contentRouter = express.Router();

contentRouter.route("/").get(getAllContent).post(postContent);
contentRouter.route("/:id").get(getContent);
contentRouter.route("edit/:id").get(getContent).post();
export default contentRouter;
