import db from "../../models/index";
import { sojus, beers } from "../alcoholDB/alcoholList";
const alcohols = db.alcohol;
const dishes = db.dish;

export const getAlcohol = async (req, res) => {
  try {
    const { type } = req.query;
    if (type === "soju") {
      res.status(200).json({ message: "겟 알콜 리스트 성공", sojus });
    } else if (type === "beer") {
      res.status(200).json({ message: "겟 알콜 리스트 성공", beers });
    }
    res.status(500).json({ message: "get 알콜 리스트 실패" });
  } catch {
    res.status(500).json({ message: "get 알콜 리스트 실패" });
  }
};

export const getOneAlcohol = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const oneAlcohol = await alcohols.findOne({ where: { id }, include: { model: dishes } });
      res.status(200).json({ oneAlcohol });
    } else {
      res.status(500).json({ message: "getOne 소주 리스트 실패" });
    }
  } catch {
    res.status(500).json({ message: "getOne 소주 리스트 실패" });
  }
};
