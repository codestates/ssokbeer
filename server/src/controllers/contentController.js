const {
  Sequelize: { Op },
} = require("../../models");
import db from "../../models/index";
import { verify } from "../token/verify";

const contents = db.content;
const users = db.user;
const comments = db.comment;

export const getAllContent = async (req, res) => {
  try {
    const rankContent = await contents.findAll({ order: [["like", "DESC"]] });
    const allContent = await contents.findAll({ order: [["id", "DESC"]] });
    res.status(200).json({ allContent, rankContent });
  } catch {
    res.status(500).json({ message: "전체 글 목록 조회 실패" });
  }
};

export const postContent = async (req, res) => {
  try {
    const { token } = req.cookies;

    const { title, content } = req.body;

    const { email } = verify(token);

    const userInfo = await users.findOne({ where: { email } });

    const contentInfo = await contents.create({
      userId: userInfo.id,
      nickname: userInfo.nickname,
      title,
      content,
      img: req.files[0] ? req.files[0].path : null,
    });

    if (contentInfo) {
      res.status(201).json({ message: "글 작성 완료", contentInfo });
    } else {
      res.status(400).json({ message: "글 작성 실패" });
    }
  } catch (e) {
    console.log(e);
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

    res.status(200).json({ visitCnt });
  } catch {
    res.status(500).json({ message: "게시글 내용 조회 및 방문실패" });
  }
};

export const updateContent = async (req, res) => {
  try {
    let { id } = req.params;

    id = parseInt(id);
    const { title, content } = req.body;
    const { files } = req;
    if (!files) await contents.update({ title, content }, { where: { id } });
    else await contents.update({ title, img: files[0].path, content }, { where: { id } });
    res.status(200).json({ message: "글 수정 완료" });
  } catch {
    res.status(500).json({ message: "글 수정 실패" });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    await contents.destroy({ where: { id } });
    res.status(201).json({ message: "글 삭제 완료" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "글 삭제 실패" });
  }
};

export const search = async (req, res) => {
  try {
    const { type, value } = req.query;
    let finder = {};
    finder[type] = { [Op.like]: `%${value}%` };

    const result = await contents.findAll({
      where: {
        [Op.or]: [finder],
      },
    });

    return res.status(200).json({ result });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "왜 안 떠 " });
  }
};

export const visitContent = async (req, res) => {
  try {
    const { id } = req.params;
    let visitCnt = await contents.findOne({
      where: { id },
      include: { model: comments },
    });

    await visitCnt.increment("visit");
    res.status(200).end();
  } catch {
    res.status(500).json({ message: "게시글 내용 조회 및 방문실패" });
  }
};
