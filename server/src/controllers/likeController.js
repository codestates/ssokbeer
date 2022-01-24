import db from "../../models/index";

import { verify } from "../token/verify";

const likes = db.like;
const users = db.user;
const contents = db.content;

export const like = async (req, res) => {
  try {
    const { token } = req.cookies;
    const { email } = verify(token);

    let { id: contentId } = req.params;
    contentId = parseInt(contentId);

    const { dataValues: userInfo } = await users.findOne({ where: { email } });

    const [notCreated, created] = await likes.findOrCreate({
      where: { userId: userInfo.id, contentId },
      defaults: { contentId, userId: userInfo.id },
    });
    if (!created) {
      likes.destroy({ where: { userId: userInfo.id } });
      await contents.increment({ like: -1 }, { where: { id: contentId } });
      return res.status(201).json({ message: "추천 취소" });
    } else {
      await contents.increment({ like: 1 }, { where: { id: contentId } });
      res.status(201).json({ message: "추천 성공", userInfo });
    }
  } catch {
    res.status(500).json({ message: "추천 요청 실패" });
  }
};

export const getLikeList = async (req, res) => {
  try {
    const allLike = await likes.findAll({});
    res.status(200).json({ message: "전체 추천 목록 조회", allLike });
  } catch {
    res.status(500).json({ message: "전체 추천 목록 조회 실패" });
  }
};
