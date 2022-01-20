import db from "../../models/index";

import { verify } from "../token/verify";

const likes = db.likes;
const users = db.users;
export const getLikeList = async (req, res) => {
  try {
    const allLike = await likes.findAll({});
    res.status(200).json({ message: "전체 추천 목록 조회", allLike });
  } catch {
    res.status(500).json({ message: "전체 추천 목록 조회 실패" });
  }
};

export const postLike = async (req, res) => {
  const { token } = req.cookies;
  const { email } = verify(token);
  const { id } = req.params;
  try {
    const userInfo = await users.findOne({ where: { email } });
    const [notCreated, created] = await likes.findOrCreate({
      where: { userId: userInfo.id },
      defaults: { contentId: id, userId: userInfo.id },
    });
    if (created) {
      await likes.destroy({ where: { usersId: userInfo.id } });
      res.status(204).json({ message: "추천 취소" });
    } else {
      res.status(201).json({ message: "추천 성공", userInfo });
    }
  } catch {
    res.status(500).json({ message: "추천 요청 실패" });
  }
};
