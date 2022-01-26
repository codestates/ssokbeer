"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verify = token => {
  const data = _jsonwebtoken.default.verify(token, process.env.ACCESS_SECRET);

  return data;
};

exports.verify = verify;