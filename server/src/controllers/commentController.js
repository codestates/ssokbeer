import db from "../models/index";
import { verify } from "../token/verify";

db.sequelize.sync();
const comment = db.comments;
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

    const Comment = await comment.create({
      content,
      nickname,
      contentsId,
    });

    res.status(200).json(Comment.dataValues);
  } catch {
    res.status(400).json({ message: "댓글 작성 실패" });
  }
};
