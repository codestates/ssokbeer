<<<<<<< HEAD
import express from "express";
import { githubLogin } from "../controllers/oauth/githubController";
import { googleLogin } from "../controllers/oauth/googleController";

const oauthRotuer = express.Router();

oauthRotuer.post("/google", googleLogin);

oauthRotuer.post("/github", githubLogin);

export default oAuthRotuer;
=======
// import express from "express";
// import { githubLogin } from "../controllers/oAuth/githubController";
// import { googleLogin } from "../controllers/oAuth/googleController";

// const oAuthRotuer = express.Router();

// oAuthRotuer.post("/google", googleLogin);

// oAuthRotuer.post("/github", githubLogin);

// export default oAuthRotuer;
>>>>>>> 054d3f2639e51dd5157488d53d92e1c67b22c3bd
