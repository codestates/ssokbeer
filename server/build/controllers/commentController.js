"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComment = exports.editCommet = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.default.sequelize.sync();

const comments = _index.default.comments;
const users = _index.default.users;
const contents = _index.default.contents;

const postComment = async (req, res) => {
  try {
    const {
      token
    } = req.cookies;
    const {
      email
    } = (0, _verify.verify)(token);
    const {
      dataValues: {
        nickname
      }
    } = await users.findOne({
      where: {
        email
      }
    });
    const {
      content,
      contentsId
    } = req.body;
    const Comment = await comments.create({
      content,
      nickname,
      contentsId
    });
    res.status(200).json(Comment.dataValues);
  } catch (_unused) {
    res.status(400).json({
      message: "댓글 작성 실패"
    });
  }
};

exports.postComment = postComment;

const editCommet = async (req, res) => {
  const {
    content
  } = req.body; // const { email } = verify(token);
  // const { dataValues } = await users.findOne({
  //   where: { email },
  //   include: { model: comments, where: { id } },
  // });

  const commentInfo = await comments.update({
    content
  }, {
    where: {
      id
    }
  });
  res.status(200).json({
    message: "글 수정 완료 ",
    commentInfo
  });
};

exports.editCommet = editCommet;