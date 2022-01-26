"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postDish = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _test = require("../alcoholDB/test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dishData = require("../alcoholDB/dishes");

const dishes = _index.default.dish;

const postDish = async (req, res) => {
  try {
    for (let i = 0; i < _test.dishList.length; i++) {
      await dishes.create({
        name: _test.dishList[i].name,
        img: _test.dishList[i].img,
        content: _test.dishList[i].content
      });
    }

    res.status(201).json({
      message: "음식 추가 성공"
    });
  } catch (_unused) {
    res.status(500).json({
      message: "음식 추가 실패 "
    });
  }
};

exports.postDish = postDish;