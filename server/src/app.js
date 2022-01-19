import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import contentRouter from "./routers/contentRouter";
import userRouter from "./routers/userRouter";
import commentRouter from "./routers/commentRouter";
<<<<<<< HEAD
import likeRouter from "./routers/likeRouter";
=======
import oAuthRotuer from "./routers/oauthRouter";
>>>>>>> 054d3f2639e51dd5157488d53d92e1c67b22c3bd

const app = express();
const logger = morgan("dev");
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
  })
);

app.use(logger);

app.use("/content", contentRouter);

app.use("/comment", commentRouter);

app.use("/user", userRouter);

<<<<<<< HEAD
app.use("/like", likeRouter);
=======
// app.use("/oauth", oAuthRotuer);

>>>>>>> 054d3f2639e51dd5157488d53d92e1c67b22c3bd
export default app;
