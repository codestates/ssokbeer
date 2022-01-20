"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = require("../controllers/commentController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const commentRouter = _express.default.Router();

commentRouter.route("/").post(_commentController.postComment);
commentRouter.route("/:id").post(_commentController.editCommet);
var _default = commentRouter;
exports.default = _default;