import db from "../../models/index";
import { verify } from "../token/verify";

const comments = db.comments;
const users = db.users;

export const postComment = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    const { email } = verify(token);
    const {
      dataValues: { nickname },
    } = await users.findOne({ where: { email } });

    const { content, contentsId } = req.body;
    if (!content || !contentsId) {
      return res.status(400).json({ message: "댓글을 입력해 주세요" });
    }

    const Comment = await comments.create({
      content,
      nickname,
      contentsId,
    });

    res.status(201).json(Comment.dataValues);
  } catch {
    res.status(500).json({ message: "댓글 작성 실패" });
  }
};
export const editComment = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    const { content } = req.body;
    const { id } = req.params;

    if (!content) {
      return res.status(400).json({ message: "댓글을 입력해 주세요" });
    }

    const commentInfo = await comments.update({ content }, { where: { id } });

    res.status(200).json({ message: "코멘트 수정 완료 ", commentInfo });
  } catch {
    res.status(500).json({ message: "코멘트 수정 실패 " });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "로그인 해주세요" });
    }

    const { id } = req.params;
    await comments.destroy({ where: { id } });

    res.status(204).json({ message: "코멘트 삭제 완료  " });
  } catch {
    res.status(500).json({ message: "코멘트 삭제 실패 " });
  }
};
