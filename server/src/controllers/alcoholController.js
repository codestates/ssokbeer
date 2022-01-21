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
  } catch {
    res.status(500).json({ message: "get 소주 리스트 실패" });
  }
};

export const getOneAlcohol = async (req, res) => {
  try {
    res.status(200).json({});
  } catch {
    res.status(500).json({ message: "getOne 소주 리스트 실패" });
  }
};

export const postAlcohol = async (req, res) => {
  try {
    console.log("접근");

    console.log(alcohols);
    const result = await alcohols.create({
      name: "잎세주 ",
      content: "세상에서",
      pairDish: "제일가는",
      img: "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img1.jpg?raw=true",
      type: "soju",
    });

    console.log("결과");
    console.log(result);
  } catch {
    res.status(500).json({ message: "post 알콜 실패" });
  }
};
