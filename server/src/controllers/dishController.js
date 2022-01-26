import db from "../../models/index";
import { dishList } from "../alcoholDB/test";
const dishes = db.dish;
export const postDish = async (req, res) => {
  try {
    for (let i = 0; i < dishList.length; i++) {
      await dishes.create({
        name: dishList[i].name,
        img: dishList[i].img,
        content: dishList[i].content,
      });
    }
    res.status(201).json({ message: "음식 추가 성공" });
  } catch {
    res.status(500).json({ message: "음식 추가 실패 " });
  }
};
