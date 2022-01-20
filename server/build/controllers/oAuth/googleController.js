"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleLogin = void 0;

require("core-js/modules/es.promise.js");

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("../../../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.default.sequelize.sync();

const users = _index.default.users;

const googleLogin = async (req, res) => {
  const {
    code
  } = req.body;
  const {
    data: {
      access_token
    }
  } = await _axios.default.post("https://oauth2.googleapis.com/token?code=".concat(code, "&client_id=").concat(process.env.GOOGLE_CLIENT_ID, "&client_secret=").concat(process.env.GOOGLE_SECRET, "&redirect_uri=http://localhost:3000&grant_type=authorization_code"), {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  });
  const {
    data: {
      email
    }
  } = await _axios.default.get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=".concat(access_token), {
    headers: {
      authorization: "token ".concat(access_token),
      accept: "application/json"
    }
  });
  const user = await users.findOne({
    email
  });

  if (!user) {
    await users.create({
      email
    });
  }

  const token = jwt.sign({
    email
  }, process.env.ACCESS_SECRET, {
    expiresIn: "3h"
  });
  return res.cookie("token", token).json({
    message: "ok",
    token
  });
};

exports.googleLogin = googleLogin;