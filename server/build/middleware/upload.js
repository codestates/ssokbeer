"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFiles = void 0;

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const uploadFiles = (0, _multer.default)({
  dest: "uploads/"
});
exports.uploadFiles = uploadFiles;