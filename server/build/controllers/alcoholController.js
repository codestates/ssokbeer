"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAlcohol = exports.getAlcohol = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _alcoholList = require("../alcoholDB/alcoholList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alcohols = _index.default.alcohol;
const dishes = _index.default.dish;

const getAlcohol = async (req, res) => {
  try {
    const {
      type
    } = req.query;

    if (type === "all") {
      const all = await alcohols.findAll({});
      return res.status(200).json({
        message: "모든 주류 불러오기",
        all
      });
    } else if (type === "soju") {
      const soju = await alcohols.findAll({
        where: {
          type: "soju"
        }
      });
      return res.status(200).json({
        message: "소주 리스트 불러오기",
        soju
      });
    } else if (type === "beer") {
      const beer = await alcohols.findAll({
        where: {
          type: "beer"
        }
      });
      return res.status(200).json({
        message: "맥주 리스트 불러오기",
        beer
      });
    }

    return res.status(500).json({
      message: "주류 불러오기 실패"
    });
  } catch (_unused) {
    return res.status(500).json({
      message: "주류 불러오기 실패"
    });
  }
};

exports.getAlcohol = getAlcohol;

const getOneAlcohol = async (req, res) => {
  try {
    const {
      id
    } = req.query;

    if (id) {
      const oneAlcohol = await alcohols.findOne({
        where: {
          id
        },
        include: {
          model: dishes
        }
      });
      return res.status(200).json({
        oneAlcohol
      });
    } else {
      res.status(500).json({
        message: "getOne 소주 리스트 실패"
      });
    }
  } catch (_unused2) {
    return res.status(500).json({
      message: "getOne 소주 리스트 실패"
    });
  }
};

exports.getOneAlcohol = getOneAlcohol;