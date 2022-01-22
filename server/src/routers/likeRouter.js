import express from "express";
import { like } from "../controllers/likeController";

const likeRouter = express.Router();

likeRouter.route("/:id").post(like);

export default likeRouter;
