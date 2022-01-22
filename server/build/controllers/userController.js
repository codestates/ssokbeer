"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signout = exports.postSignup = exports.postLogin = exports.nickCheck = exports.logout = exports.getUserList = exports.getProfile = exports.emailCheck = exports.editProfile = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const users = _index.default.users;
const contents = _index.default.contents;

const nickCheck = async (req, res) => {
  let {
    nickname
  } = req.body;
  let isNick = await users.findOne({
    where: {
      nickname
    }
  });
  isNick = Boolean(isNick);
  return res.status(200).json({
    nickname: isNick
  });
};

exports.nickCheck = nickCheck;

const emailCheck = async (req, res) => {
  let {
    email
  } = req.body;
  let isEmail = await users.findOne({
    where: {
      email
    }
  });
  isEmail = Boolean(isEmail);
  return res.status(200).json({
    email: isEmail
  });
};

exports.emailCheck = emailCheck;

const postSignup = async (req, res) => {
  console.log("POSSSTS");
  const {
    nickname,
    email,
    password
  } = req.body;

  try {
    console.log("BODY::::", req.body);

    if (!nickname || !email || !password) {
      res.status(400).json({
        message: "닉네임,이메일 또는 비밀번호가 공백입니다"
      });
      res.end();
    }

    const Hashpassword = await _bcrypt.default.hash(password, 5);
    const [result, created] = await users.findOrCreate({
      where: {
        email
      },
      defaults: {
        nickname,
        email,
        password: Hashpassword
      }
    });

    if (!created) {
      return res.status(401).json({
        message: "이미 가입된 회원입니다"
      });
    }

    const token = _jsonwebtoken.default.sign({
      nickname,
      email
    }, process.env.ACCESS_SECRET, {
      expiresIn: "3h"
    });

    res.cookie("token", token);
    res.status(201).json({
      token
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "회원가입실패"
    });
  }
};

exports.postSignup = postSignup;

const signout = async (req, res) => {
  try {
    const {
      token
    } = req.cookies;
    const {
      email
    } = (0, _verify.verify)(token);
    await users.destroy({
      where: {
        email
      }
    });
    res.status(204).json({
      message: "회원탈퇴 성공"
    });
  } catch (_unused) {
    res.status(500).json({
      message: "회원탈퇴 실패"
    });
  }
};

exports.signout = signout;

const getProfile = async (req, res) => {
  // let { id } = req.params;
  // id = parseInt(id);
  try {
    const {
      token
    } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "로그인 해주세요"
      });
    }

    const {
      email
    } = (0, _verify.verify)(token);
    const userInfo = await users.findOne({
      where: {
        email
      },
      include: {
        model: contents
      }
    });
    res.status(200).json(userInfo);
  } catch (_unused2) {
    res.status(500).json({
      message: "내정보 불러오기 실패"
    });
  }
};

exports.getProfile = getProfile;

const editProfile = async (req, res) => {
  // let { id } = req.params;
  try {
    const {
      token
    } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "로그인 해주세요"
      });
    }

    let {
      email
    } = (0, _verify.verify)(token);
    let {
      nickname,
      password
    } = req.body;

    if (!nickname || !password) {
      return res.status(400).json({
        message: "닉네임,이메일 또는 비밀번호가 공백입니다"
      });
    }

    password = await _bcrypt.default.hash(password, 5);
    const userInfo = await users.update({
      nickname,
      password
    }, {
      where: {
        email
      }
    });
    res.status(200).json({
      message: "정보수정완료 ",
      userInfo
    });
  } catch (_unused3) {
    res.status(500).json({
      message: "정보수정실패 "
    });
  }
};

exports.editProfile = editProfile;

const getUserList = async (req, res) => {
  try {
    const usersInfo = await users.findAll({});
    res.status(200).json(usersInfo);
  } catch (_unused4) {
    res.status(500).json({
      message: "유저리스트 불러오기 실패"
    });
  }
};

exports.getUserList = getUserList;

const postLogin = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "이메일 또는 비밀번호가 공백입니다"
      });
    }

    const user = await users.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(401).json({
        message: "가입된 회원이 아닙니다"
      });
    }

    const ok = await _bcrypt.default.compare(password, user.dataValues.password);

    if (!ok) {
      return res.status(401).json({
        message: "비밀번호가 다릅니다"
      });
    }

    const token = _jsonwebtoken.default.sign(user.dataValues, process.env.ACCESS_SECRET, {
      expiresIn: "3h"
    });

    res.cookie("token", token);
    res.status(200).json({
      userInfo: user.dataValues,
      token
    });
  } catch (_unused5) {
    return res.status(500).json({
      message: "로그인 실패"
    });
  }
};

exports.postLogin = postLogin;

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(204).json({
      message: "로그아웃 되었습니다"
    });
  } catch (_unused6) {
    return res.status(500).json({
      message: "로그아웃 실패"
    });
  }
};

exports.logout = logout;