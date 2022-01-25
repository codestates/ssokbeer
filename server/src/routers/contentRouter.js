import express from "express";
import {
  deleteContent,
  getAllContent,
  getContent,
  postContent,
  search,
  updateContent,
} from "../controllers/contentController";
const contentRouter = express.Router();

contentRouter.route("/").get(getAllContent).post(postContent);
contentRouter.route("/:id(\\d+)").get(getContent).delete(deleteContent);
contentRouter.route("/search").get(search);
contentRouter.route("/edit/:id").patch(updateContent);

// contentRouter.route("/admin/del").delete(deleteAllContent);

export default contentRouter;
