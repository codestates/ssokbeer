import express from "express";
import {
  deleteContent,
  getAllContent,
  getContent,
  postContent,
  search,
  updateContent,
} from "../controllers/contentController";
import { uploadFiles } from "../middleware/upload";
const contentRouter = express.Router();


contentRouter.route("/").get(getAllContent).post(uploadFiles.array("file"), postContent);
contentRouter.route("/:id(\\d+)").get(getContent).delete(deleteContent);
contentRouter.route("/search").get(search);
contentRouter.route("/edit/:id").patch(uploadFiles.array("file"), updateContent);

// contentRouter.route("/admin/del").delete(deleteAllContent);

export default contentRouter;
