"use strict";

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _contentController = require("../controllers/contentController");

var _upload = require("../middleware/upload");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contentRouter = _express.default.Router();

contentRouter.route("/").get(_contentController.getAllContent).post(_upload.uploadFiles.array("file"), _contentController.postContent);
contentRouter.route("/:id(\\d+)").get(_contentController.getContent).delete(_contentController.deleteContent);
contentRouter.route("/search").get(_contentController.search);
contentRouter.route("/edit/:id").patch(_upload.uploadFiles.array("file"), _contentController.updateContent); // contentRouter.route("/admin/del").delete(deleteAllContent);

var _default = contentRouter;
exports.default = _default;