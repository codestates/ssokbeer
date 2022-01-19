import express from "express";
import {
  deleteAllContent,
  deleteContent,
  getAllContent,
  getContent,
  postContent,
  updateContent,
} from "../controllers/contentController";
const contentRouter = express.Router();

contentRouter.route("/").get(getAllContent).post(postContent);
contentRouter.route("/:id").get(getContent);
contentRouter.route("/edit/:id").get(getContent).post(updateContent);
contentRouter.route("/del/:id").delete(deleteContent);
// contentRouter.route("/admin/del").delete(deleteAllContent);

export default contentRouter;
