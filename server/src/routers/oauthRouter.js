import express from "express";
import { googleLogin } from "../controllers/oAuth/googleController";

const oAuthRotuer = express.Router();

oAuthRotuer.post("/google", googleLogin);

export default oAuthRotuer;
