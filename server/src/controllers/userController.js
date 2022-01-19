import db from "../../models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verify } from "../token/verify";

db.sequelize.sync();

const users = db.users;
const contents = db.contents;

export const postJoin = async (req, res) => {
  let { nickname, email, password } = req.body;

  password = await bcrypt.hash(password, 5);

  const { dataValues } = await users.create({
    nickname,
    email,
    password,
  });
  delete dataValues.password;
  console.log("1번");
  console.log(dataValues);
  const token = jwt.sign({ dataValues }, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });
  console.log("2번");

  res.cookie("token", token);
  res.status(200).json(token);
};

export const getProfile = async (req, res) => {
  // let { id } = req.params;
  // id = parseInt(id);
  const { token } = req.cookies;

  const { email } = verify(token);

  const userInfo = await users.findOne({
    where: { email },
    include: { model: contents },
  });

  res.status(200).json(userInfo);
};

export const editProfile = async (req, res) => {
  // let { id } = req.params;
  const { token } = req.cookies;

  let { email } = verify(token);

  let { nickname, password } = req.body;
  password = await bcrypt.hash(password, 5);

  const userInfo = await users.update(
    { nickname, password },
    { where: { email } }
  );

  res.status(200).json({ message: "정보수정완료 ", userInfo });
};

export const getUserList = async (req, res) => {
  const usersInfo = await users.findAll({});
  res.status(200).json(usersInfo);
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const {
      user,
      user: { dataValues },
    } = users.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ message: "An account with this username does not exists." });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ dataValues }, process.env.ACCESS_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    res.json(dataValues);
  } catch {
    return res
      .status(400)
      .json({ message: "An account with this username does not exists." });
  }
};
