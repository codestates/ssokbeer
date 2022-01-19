import express from "express";
import { getLikeList, postLike } from "../controllers/likeController";

const likeRouter = express.Router();

likeRouter.route("/").get(getLikeList);
likeRouter.route("/:id").post(postLike);

export default likeRouter;
