"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verify = token => {
  const {
    dataValues
  } = _jsonwebtoken.default.verify(token, process.env.ACCESS_SECRET);

  return dataValues;
};

exports.verify = verify;