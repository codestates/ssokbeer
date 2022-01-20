"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _contentRouter = _interopRequireDefault(require("./routers/contentRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _commentRouter = _interopRequireDefault(require("./routers/commentRouter"));

var _likeRouter = _interopRequireDefault(require("./routers/likeRouter"));

var _oauthRouter = _interopRequireDefault(require("./routers/oauthRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const logger = (0, _morgan.default)("dev");
app.use((0, _cookieParser.default)());
app.use(_express.default.json());
app.use((0, _cors.default)({
  origin: true,
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
  cookie: {
    maxAge: 24 * 6 * 60 * 10000,
    httpOnly: false,
    secure: true,
    sameSite: "None"
  }
}));
app.use(logger);
app.use("/content", _contentRouter.default);
app.use("/comment", _commentRouter.default);
app.use("/user", _userRouter.default);
app.use("/oauth", _oauthRouter.default);
app.use("/like", _likeRouter.default);
var _default = app;
exports.default = _default;