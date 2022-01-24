import db from "../../models/index";
import { dishList } from "../alcoholDB/test";
const dishData = require("../alcoholDB/dishes");
const dishes = db.dish;
// console.log(dishData);
export const postDish = async (req, res) => {
  try {
    console.log(dishList);
    await dishes.create({
      name: dishData.dish1.name,
      img: dishData.dish1.img,
      content: dishData.dish1.content,
    });

    res.status(201).json({ message: "음식 추가 성공" });
  } catch {
    res.status(500).json({ message: "음식 추가 실패 " });
  }
};
