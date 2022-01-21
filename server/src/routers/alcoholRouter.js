import express from "express";
import { getAlcohol, postAlcohol } from "../controllers/alcoholController";

const alcoholRouter = express.Router();

alcoholRouter.route("/").get(getAlcohol).post(postAlcohol);

export default alcoholRouter;
