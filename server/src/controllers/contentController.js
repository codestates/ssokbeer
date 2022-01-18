import db from "../../models/index";
import { verify } from "../token/verify";

// db.sequelize.sync();
const content = db.contents;
const user = db.users;
export const getAllContent = async (req, res) => {
  const allContent = await content.findAll();
  res.status(200).json({ message: "전체 글 목록 조회", allContent });
};
export const postContent = async (req, res) => {
  const { token } = req.cookies;
  const { img, content } = req.body;
  const { email } = verify(token);
  const userInfo = await user.findOne({ where: { email } });
  const contentInfo = await content.create({
    userId: userInfo.id,
    img,
    content,
  });
  //   userInfo.addcontentInfo();
  if (contentInfo) {
    res.status(200).json({ message: "글 작성 완료", contentInfo });
  } else {
    res.status(400).json({ message: "글 작성 실패" });
  }
};

export const getContent = async (req, res) => {
  //   await content.create({
  //     content: "폭군 김모군",
  //   });
  const { id } = req.params;
  let visitCnt = await content.findOne({ where: { id } });
  await visitCnt.increment("visits");

  res
    .status(201)
    .json({ message: "게시글 내용 조회 및 방문자 수 증가 ", visitCnt });
};

export const updateContent = async (req, res) => {
  const { id } = req.params;
  const { img, content } = req.body;

  const contentInfo = await content.update({ img, content }, { where: { id } });
  res.status(200).json({ message: "글 수정 완료 ", contentInfo });
};
