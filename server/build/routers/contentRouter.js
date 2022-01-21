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
contentRouter.route("/:id").get(_contentController.getContent).delete(_contentController.deleteContent);
contentRouter.route("/edit/:id").patch(_contentController.updateContent); // contentRouter.route("/admin/del").delete(deleteAllContent);

var _default = contentRouter;
exports.default = _default;