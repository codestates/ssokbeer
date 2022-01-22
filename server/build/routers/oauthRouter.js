"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _githubController = require("../controllers/oauth/githubController");

var _googleController = require("../controllers/oauth/googleController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const oauthRotuer = _express.default.Router();

oauthRotuer.post("/google", _googleController.googleLogin);
oauthRotuer.post("/github", _githubController.githubLogin);
var _default = oauthRotuer;
exports.default = _default;