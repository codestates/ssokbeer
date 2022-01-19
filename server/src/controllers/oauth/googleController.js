import axios from "axios";
import db from "../../../models/index";

db.sequelize.sync();

const users = db.users;

export const googleLogin = async (req, res) => {
  const { code } = req.body;

  const {
    data: { access_token },
  } = await axios.post(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_SECRET}&redirect_uri=http://localhost:3000&grant_type=authorization_code`,
    {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );

  const {
    data: { email },
  } = await axios.get(
    `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`,
    {
      headers: {
        authorization: `token ${access_token}`,
        accept: "application/json",
      },
    }
  );

  const user = await users.findOne({
    email,
  });

  if (!user) {
    await users.create({
      email,
    });
  }

  const token = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "3h" });

  return res.cookie("token", token).json({ message: "ok", token });
};
