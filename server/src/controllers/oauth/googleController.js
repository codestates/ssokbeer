import axios from "axios";
import jwt from "jsonwebtoken";
import db from "../../../models/index";

const users = db.user;

export const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;
    const {
      data: { access_token },
    } = await axios.post(
      `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_SECRET}&redirect_uri=http://ssokbeer-bucket-depoly.s3-website.ap-northeast-2.amazonaws.com/login&grant_type=authorization_code`,
      {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      },
      { withCredentials: true }
    );

    const {
      data: { email },
    } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`, {
      headers: {
        authorization: `token ${access_token}`,
        accept: "application/json",
      },
    });

    let user = await users.findOne({
      where: { email },
    });

    if (!user) {
      user = await users.create({
        email,
        nickname: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 5),
      });
    }

    const token = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "6h" });
    return res
      .cookie("token", token, { sameSite: "None", secure: true })
      .json({ message: "ok", id: user.dataValues.id });
  } catch (e) {
    console.log(e);
  }
};
