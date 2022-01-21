"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _likeController = require("../controllers/likeController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const likeRouter = _express.default.Router();

likeRouter.route("/").get(_likeController.getLikeList);
likeRouter.route("/:id").post(_likeController.postLike);
var _default = likeRouter;
exports.default = _default;