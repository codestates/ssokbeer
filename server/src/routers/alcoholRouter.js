import express from "express";
import { getAlcohol, getOneAlcohol } from "../controllers/alcoholController";

const alcoholRouter = express.Router();

alcoholRouter.route("/").get(getAlcohol);
alcoholRouter.route("/detail").get(getOneAlcohol);

export default alcoholRouter;
