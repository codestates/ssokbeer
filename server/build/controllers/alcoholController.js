"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAlcohol = exports.getAlcohol = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alcohol = _index.default.alcohol;

const getAlcohol = async (req, res) => {
  try {
    const alcoholInfo = await alcohol.findAll({});
    res.status(200).json(alcoholInfo);
  } catch (_unused) {
    res.status(500).json({
      message: "get 술 리스트 실패"
    });
  }
};

exports.getAlcohol = getAlcohol;

const getOneAlcohol = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const alcoholInfo = await alcohol.findOne({
      where: {
        id
      }
    });
    res.status(200).json(alcoholInfo);
  } catch (_unused2) {
    res.status(500).json({
      message: "getOne 술 실패"
    });
  }
}; //@@@@@@@@@@@@@API에 안적어도 됨
// export const getOneAlcohol = async (req, res) => {
//   try {
//     res.status(200).json({ soju: db.soju });
//   } catch {
//     res.status(500).json({ message: "술 추가 실패" });
//   }
// };


exports.getOneAlcohol = getOneAlcohol;