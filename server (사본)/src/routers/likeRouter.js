import express from "express";
import { getLikeList, like } from "../controllers/likeController";

const likeRouter = express.Router();

likeRouter.route("/").get(getLikeList);
likeRouter.route("/:id").post(like);

export default likeRouter;
