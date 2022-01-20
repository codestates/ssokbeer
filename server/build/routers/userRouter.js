"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = _express.default.Router();

userRouter.route("/").get(_userController.getUserList);
userRouter.route("/nickcheck").post(_userController.nickCheck);
userRouter.route("/emailcheck").post(_userController.emailCheck);
userRouter.route("/signup").post(_userController.postSignup);
userRouter.route("/signout").get(_userController.signout);
userRouter.route("/profile").get(_userController.getProfile).post(_userController.editProfile);
userRouter.route("/login").post(_userController.postLogin);
userRouter.route("/logout").get(_userController.logout);
var _default = userRouter;
exports.default = _default;