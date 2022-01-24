import express from "express";
import { postDish } from "../controllers/dishController";

const dishRouter = express.Router();

dishRouter.route("/").post(postDish);

export default dishRouter;
