"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.like = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const likes = _index.default.like;
const users = _index.default.user;
const contents = _index.default.content;

const like = async (req, res) => {
  try {
    const {
      token
    } = req.cookies;
    const {
      email
    } = (0, _verify.verify)(token);
    let {
      id: contentId
    } = req.params;
    contentId = parseInt(contentId);
    const {
      dataValues: userInfo
    } = await users.findOne({
      where: {
        email
      }
    });
    const [notCreated, created] = await likes.findOrCreate({
      where: {
        userId: userInfo.id,
        contentId
      },
      defaults: {
        contentId,
        userId: userInfo.id
      }
    });

    if (!created) {
      likes.destroy({
        where: {
          userId: userInfo.id
        }
      });
      await contents.increment({
        like: -1
      }, {
        where: {
          id: contentId
        }
      });
      return res.status(201).json({
        message: "추천 취소"
      });
    } else {
      await contents.increment({
        like: 1
      }, {
        where: {
          id: contentId
        }
      });
      res.status(201).json({
        message: "추천 성공",
        userInfo
      });
    }
  } catch (_unused) {
    res.status(500).json({
      message: "추천 요청 실패"
    });
  }
};

exports.like = like;