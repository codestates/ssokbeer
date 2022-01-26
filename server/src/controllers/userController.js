import db from "../../models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verify } from "../token/verify";

const users = db.user;

export const postSignup = async (req, res) => {
  const { nickname, email, password } = req.body;

  try {
    if (!nickname || !email || !password) {
      return res.status(400).json({ message: "닉네임,이메일 또는 비밀번호가 공백입니다" });
    }
    const Hashpassword = await bcrypt.hash(password, 5);

    const [result, created] = await users.findOrCreate({
      where: { email },
      defaults: { nickname, email, password: Hashpassword },
    });

    if (!created) {
      return res.status(401).json({ message: "이미 가입된 회원입니다" });
    }
    const token = jwt.sign({ nickname, email }, process.env.ACCESS_SECRET, {
      expiresIn: "3h",
    });

    res.cookie("token", token, { sameSite: "None", secure: true });
    res.status(201).json({ result });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "회원가입실패" });
  }
};

export const signout = async (req, res) => {
  try {
    const { token } = req.cookies;
    const { email } = verify(token);
    await users.destroy({ where: { email } });
    res.clearCookie("token");
    res.status(201).json({ message: "회원탈퇴 성공" });
  } catch {
    res.status(500).json({ message: "회원탈퇴 실패" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    const { email } = verify(token);

    const userInfo = await users.findOne({
      where: { email },
    });

    res.status(200).json({ message: "내정보 불러오기 성공", userInfo });
  } catch {
    res.status(500).json({ message: "내정보 불러오기 실패" });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    let { email } = verify(token);

    let { nickname, password } = req.body;
    if (!nickname) {
      return res.status(400).json({ message: "닉네임,이메일 또는 비밀번호가 공백입니다" });
    }

    if (password) {
      password = await bcrypt.hash(password, 5);
      await users.update({ nickname, password }, { where: { email } });
    } else if (!password) {
      await users.update({ nickname }, { where: { email } });
    }
    const userInfo = await users.findOne({ where: { email } });

    res.status(200).json({ message: "정보수정완료 ", userInfo });
  } catch {
    res.status(500).json({ message: "정보수정실패 " });
  }
};

export const getUserList = async (req, res) => {
  try {
    const usersInfo = await users.findAll({});
    res.status(200).json(usersInfo);
  } catch {
    res.status(500).json({ message: "유저리스트 불러오기 실패" });
  }
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "이메일 또는 비밀번호가 공백입니다" });
    }

    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "가입된 회원이 아닙니다" });
    }

    const ok = await bcrypt.compare(password, user.dataValues.password);
    if (!ok) {
      return res.status(401).json({ message: "비밀번호가 다릅니다" });
    }

    const token = jwt.sign(user.dataValues, process.env.ACCESS_SECRET, {
      expiresIn: "3h",
    });

    res.cookie("token", token, { sameSite: "None", secure: true });
    res.status(200).json({ userInfo: user.dataValues, token });
  } catch {
    return res.status(500).json({ message: "로그인 실패" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "로그아웃 되었습니다" });
  } catch {
    return res.status(500).json({ message: "로그아웃 실패" });
  }
};
