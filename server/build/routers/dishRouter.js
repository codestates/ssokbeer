"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _dishController = require("../controllers/dishController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dishRouter = _express.default.Router();

dishRouter.route("/").post(_dishController.postDish);
var _default = dishRouter;
exports.default = _default;