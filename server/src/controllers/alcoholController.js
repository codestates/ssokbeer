import db from "../../models/index";
const alcohol = db.alcohol;
export const getAlcohol = async (req, res) => {
  try {
    const alcoholInfo = await alcohol.findAll({});
    res.status(200).json(alcoholInfo);
  } catch {
    res.status(500).json({ message: "get 술 리스트 실패" });
  }
};

export const getOneAlcohol = async (req, res) => {
  try {
    const { id } = req.params;
    const alcoholInfo = await alcohol.findOne({ where: { id } });
    res.status(200).json(alcoholInfo);
  } catch {
    res.status(500).json({ message: "getOne 술 실패" });
  }
};

//@@@@@@@@@@@@@API에 안적어도 됨
// export const getOneAlcohol = async (req, res) => {
//   try {
//     res.status(200).json({ soju: db.soju });
//   } catch {
//     res.status(500).json({ message: "술 추가 실패" });
//   }
// };
