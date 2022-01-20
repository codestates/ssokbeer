import db from "../../models/index";
import { verify } from "../token/verify";

const comments = db.comments;
const users = db.users;
const contents = db.contents;

export const postComment = async (req, res) => {
  try {
    const { token } = req.cookies;

    const { email } = verify(token);
    const {
      dataValues: { nickname },
    } = await users.findOne({ where: { email } });

    const { content, contentsId } = req.body;

    const Comment = await comments.create({
      content,
      nickname,
      contentsId,
    });

    res.status(200).json(Comment.dataValues);
  } catch {
    res.status(400).json({ message: "댓글 작성 실패" });
  }
};
export const editCommet = async (req, res) => {
  const { content } = req.body;

  // const { email } = verify(token);

  // const { dataValues } = await users.findOne({
  //   where: { email },
  //   include: { model: comments, where: { id } },
  // });

  const commentInfo = await comments.update({ content }, { where: { id } });

  res.status(200).json({ message: "글 수정 완료 ", commentInfo });
};
