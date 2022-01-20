import express from "express";

const alcoholRouter = express.Router();

alcoholRouter.route("/").get();

alcoholRouter.route("/:id").get();

export default alcoholRouter;
