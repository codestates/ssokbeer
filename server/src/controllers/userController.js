import db from "../../models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

db.sequelize.sync();

const users = db.users;

export const postJoin = async (req, res) => {
  let { nickname, email, password } = req.body;

  password = await bcrypt.hash(password, 5);

  const { dataValues } = await users.create({
    nickname,
    email,
    password,
  });
  delete dataValues.password;
  const token = jwt.sign({ dataValues }, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.status(200).json(token);
};

export const getProfile = async (req, res) => {
  const { token } = req.cookies;
  const userInfo = jwt.verify(token, process.env.ACCESS_SECRET);
  res.status(200).json(userInfo);
};

export const editProfile = async (req, res) => {};

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
      return res.status(400).json({ message: "An account with this username does not exists." });
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
    return res.status(400).json({ message: "An account with this username does not exists." });
  }
};
