import axios from "axios";
import jwt from "jsonwebtoken";
import db from "../../../models/index";

const users = db.user;

export const githubLogin = async (req, res) => {
  const { code } = req.body;
  const {
    data: { access_token },
  } = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET,
      code,
    },
    {
      headers: { accept: "application/json" },
    }
  );
  const { data } = await axios.get(" https://api.github.com/user/emails", {
    headers: {
      Authorization: `token ${access_token}`,
    },
  });

  const { email } = data.find((email) => email.primary === true && email.verified === true);
  let user = await users.findOne({
    where: { email },
  });
  const nickname = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  if (!user) {
    console.log("유저 생성");
    user = await users.create({
      email,
      nickname,
    });
  }

  const token = jwt.sign({ email }, process.env.ACCESS_SECRET, {
    expiresIn: "6h",
  });

  return res.cookie("token", token).json({ message: "소셜 로그인 완료 및 쿠키 전송", id: user.dataValues.id });
};
