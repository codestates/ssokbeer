import db from "../../models/index";
import { verify } from "../token/verify";

db.sequelize.sync();
const contents = db.contents;
const users = db.users;
const comments = db.comments;
export const getAllContent = async (req, res) => {
  try {
    const allContent = await contents.findAll({});

    res.status(200).json({ message: "전체 글 목록 조회", allContent });
  } catch {
    res.status(400).json({ message: "전체 글 목록 조회 실패" });
  }
};
export const postContent = async (req, res) => {
  const { token } = req.cookies;

  const { img, content } = req.body;
  const { email } = verify(token);

  const userInfo = await users.findOne({ where: { email } });

  const contentInfo = await contents.create({
    usersId: userInfo.id,
    img,
    content,
  });
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
  try {
    const { id } = req.params;
    let visitCnt = await contents.findOne({ where: { id }, include: { model: comments } });

    await visitCnt.increment("visits");

<<<<<<< HEAD
  res
    .status(201)
    .json({ message: "게시글 내용 조회 및 방문자 수 증가 ", visitCnt });
=======
    res.status(200).json({ message: "게시글 내용 조회 및 방문자 수 증가 ", visitCnt });
  } catch {
    res.status(400).json({ message: "게시글 내용 조회 및 방문실패" });
  }
>>>>>>> 47234ea4c9760dc0611574586d7cb6851856d188
};

export const updateContent = async (req, res) => {
  try {
    let { id } = req.params;

<<<<<<< HEAD
  id = parseInt(id);
  const { img, content } = req.body;
  const contentInfo = await contents.update(
    { img, content },
    { where: { id } }
  );
  res.status(200).json({ message: "글 수정 완료 ", contentInfo });
=======
    id = parseInt(id);
    const { img, content } = req.body;
    const contentInfo = await contents.update({ img, content }, { where: { id } });
    res.status(200).json({ message: "글 수정 완료 ", contentInfo });
  } catch {
    res.status(400).json({ message: "글 수정 실패 " });
  }
>>>>>>> 47234ea4c9760dc0611574586d7cb6851856d188
};

export const deleteContent = async (req, res) => {
  const { id } = req.params;
  await contents.destroy({ where: { id } });
  res.status(200).json({ message: "글 삭제 완료" });
};
export const deleteAllContent = async (req, res) => {};
