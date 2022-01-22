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
contentRouter.route("/:id").get(getContent).delete(deleteContent);
contentRouter.route("/edit/:id").patch(updateContent);
// contentRouter.route("/admin/del").delete(deleteAllContent);

export default contentRouter;
