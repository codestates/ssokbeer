"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLike = exports.getLikeList = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const likes = _index.default.likes;
const users = _index.default.users;

const getLikeList = async (req, res) => {
  try {
    const allLike = await likes.findAll({});
    res.status(200).json({
      message: "전체 추천 목록 조회",
      allLike
    });
  } catch (_unused) {
    res.status(500).json({
      message: "전체 추천 목록 조회 실패"
    });
  }
};

exports.getLikeList = getLikeList;

const postLike = async (req, res) => {
  const {
    token
  } = req.cookies;
  const {
    email
  } = (0, _verify.verify)(token);
  const {
    id
  } = req.params;

  try {
    const userInfo = await users.findOne({
      where: {
        email
      }
    });
    const [notCreated, created] = await likes.findOrCreate({
      where: {
        userId: userInfo.id
      },
      defaults: {
        contentId: id,
        userId: userInfo.id
      }
    });

    if (created) {
      await likes.destroy({
        where: {
          usersId: userInfo.id
        }
      });
      res.status(204).json({
        message: "추천 취소"
      });
    } else {
      res.status(201).json({
        message: "추천 성공",
        userInfo
      });
    }
  } catch (_unused2) {
    res.status(500).json({
      message: "추천 요청 실패"
    });
  }
};

exports.postLike = postLike;