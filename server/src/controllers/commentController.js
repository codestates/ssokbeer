import db from "../../models/index";
import { verify } from "../token/verify";

const comments = db.comment;
const users = db.user;

export const postComment = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    const { email } = verify(token);

    const {
      dataValues: { id, nickname },
    } = await users.findOne({ where: { email } });

    const { content, contentId } = req.body;
    if (!content || !contentId) {
      return res.status(400).json({ message: "댓글을 입력해 주세요" });
    }

    const Comment = await comments.create({
      userId: id,
      content,
      nickname,
      contentId,
    });

    res.status(201).json({ message: "댓글 작성 성공", comment: Comment.dataValues });
  } catch {
    res.status(500).json({ message: "댓글 작성 실패" });
  }
};
export const editComment = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "로그인 해주세요" });
  }

  const { content } = req.body;
  const { id } = req.params;

  if (!content) {
    return res.status(400).json({ message: "댓글을 입력해 주세요" });
  }

  await comments.update({ content }, { where: { id } });

  res.status(200).json({ message: "코멘트 수정 완료 " });
};

export const deleteComment = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "로그인 해주세요" });
  }

  const { id } = req.params;

  await comments.destroy({ where: { id } });

  res.status(200).json({ message: "코멘트 삭제 완료  " });
};
