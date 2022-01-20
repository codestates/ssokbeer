"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _contentController = require("../controllers/contentController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contentRouter = _express.default.Router();

contentRouter.route("/").get(_contentController.getAllContent).post(_contentController.postContent);
contentRouter.route("/:id").get(_contentController.getContent);
contentRouter.route("/edit/:id").get(_contentController.getContent).post(_contentController.updateContent);
contentRouter.route("/del/:id").delete(_contentController.deleteContent); // contentRouter.route("/admin/del").delete(deleteAllContent);

var _default = contentRouter;
exports.default = _default;