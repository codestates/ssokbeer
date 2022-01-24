import db from "../../models/index";
import { sojus, beers } from "../alcoholDB/alcoholList";
import { dishList } from "../alcoholDB/test";
const alcohols = db.alcohol;
const dishes = db.dish;
export const dataSetup = async (req, res, next) => {
  const alcoholLength = await alcohols.findAll({});
  if (!alcoholLength[0]) {
    for (let i = 1; i < sojus.length; i++) {
      await alcohols.create({
        name: sojus[i].name,
        img: sojus[i].img,
        type: sojus[i].type,
      });
    }
    for (let i = 1; i < beers.length; i++) {
      await alcohols.create({
        name: beers[i].name,
        img: beers[i].img,
        type: beers[i].type,
      });
    }
    for (let i = 1; i < sojus.length + beers.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (j === 0) {
          await dishes.create({
            name: dishList[i].name,
            img: dishList[i].img,
            content: dishList[i].content,
            alcoholId: i,
          });
        }
        if (j !== 0) {
          await dishes.create({
            name: dishList[i + 2].name,
            img: dishList[i + 2].img,
            content: dishList[i + 2].content,
            alcoholId: i,
          });
        }
      }
    }
    next();
  } else {
    next();
  }
};
