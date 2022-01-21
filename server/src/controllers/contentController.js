import db from "../../models/index";
import { verify } from "../token/verify";

const contents = db.content;
const users = db.user;
const comments = db.comment;
const likes = db.like;
export const getAllContent = async (req, res) => {
  try {
    const rankContent = await contents.findAll({ order: [["like", "DESC"]] });

    const allContent = await contents.findAll({});
    res
      .status(200)
      .json({ message1: "전체 글 목록 조회", allContent, message2: "랭크 목록", rankContent });
  } catch {
    res.status(500).json({ message: "전체 글 목록 조회 실패" });
  }
};

export const postContent = async (req, res) => {
  try {
    const { token } = req.cookies;

    const { title, img, content } = req.body;
    const { email } = verify(token);

    const userInfo = await users.findOne({ where: { email } });

    const contentInfo = await contents.create({
      usersId: userInfo.id,
      title,
      img,
      content,
    });

    if (contentInfo) {
      res.status(201).json({ message: "글 작성 완료", contentInfo });
    } else {
      res.status(400).json({ message: "글 작성 실패" });
    }
  } catch {
    res.status(500).json({ message: "글 작성 실패" });
  }
};

export const getContent = async (req, res) => {
  try {
    const { id } = req.params;
    let visitCnt = await contents.findOne({
      where: { id },
      include: { model: comments },
    });

    await visitCnt.increment("visits");
    res.status(200).json({ message: "게시글 내용 조회 및 방문자 수 증가 ", visitCnt });
  } catch {
    res.status(500).json({ message: "게시글 내용 조회 및 방문실패" });
  }
};

export const updateContent = async (req, res) => {
  try {
    let { id } = req.params;

    id = parseInt(id);
    const { img, content } = req.body;
    const contentInfo = await contents.update({ img, content }, { where: { id } });
    res.status(200).json({ message: "글 수정 완료 ", contentInfo });
  } catch {
    res.status(500).json({ message: "글 수정 실패 " });
  }
};

export const deleteContent = async (req, res) => {
  const { id } = req.params;
  await contents.destroy({ where: { id } });
  res.status(201).json({ message: "글 삭제 완료" });
};
export const deleteAllContent = async (req, res) => {};
