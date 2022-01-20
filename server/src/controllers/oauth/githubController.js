import axios from "axios";
import jwt from "jsonwebtoken";
import db from "../../../models/index";

const users = db.users;

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
  const { data } = await axios.get(" https://api.github.com/user", {
    headers: {
      Authorization: `token ${access_token}`,
    },
  });
  const { email } = data.find((email) => email.primary === true && email.verified === true);

  const user = await users.findOne({
    email,
  });

  if (!user) {
    await users.create({
      email,
    });
  }

  const token = jwt.sign({ email }, process.env.JWT_ACCESS, {
    expiresIn: "6h",
  });

  return res.cookie("token", token).json({ message: "소셜 로그인 완료 및 쿠키 전송" });
};
