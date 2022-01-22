"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alcoholRouter = _express.default.Router();

alcoholRouter.route("/").get();
alcoholRouter.route("/:id").get();
var _default = alcoholRouter;
exports.default = _default;