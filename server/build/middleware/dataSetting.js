"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataSetup = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _alcoholList = require("../alcoholDB/alcoholList");

var _test = require("../alcoholDB/test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alcohols = _index.default.alcohol;
const dishes = _index.default.dish;

const dataSetup = async (req, res, next) => {
  const alcoholLength = await alcohols.findAll({});

  if (!alcoholLength[0]) {
    for (let i = 1; i < _alcoholList.sojus.length; i++) {
      await alcohols.create({
        name: _alcoholList.sojus[i].name,
        img: _alcoholList.sojus[i].img,
        type: _alcoholList.sojus[i].type
      });
    }

    for (let i = 1; i < _alcoholList.beers.length; i++) {
      await alcohols.create({
        name: _alcoholList.beers[i].name,
        img: _alcoholList.beers[i].img,
        type: _alcoholList.beers[i].type
      });
    }

    for (let i = 1; i < _alcoholList.sojus.length + _alcoholList.beers.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (j === 0) {
          await dishes.create({
            name: _test.dishList[i].name,
            img: _test.dishList[i].img,
            content: _test.dishList[i].content,
            alcoholId: i
          });
        }

        if (j !== 0) {
          await dishes.create({
            name: _test.dishList[i + 2].name,
            img: _test.dishList[i + 2].img,
            content: _test.dishList[i + 2].content,
            alcoholId: i
          });
        }
      }
    }

    next();
  } else {
    next();
  }
};

exports.dataSetup = dataSetup;