"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComment = exports.editComment = exports.deleteComment = void 0;

require("core-js/modules/es.promise.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const comments = _index.default.comment;
const users = _index.default.user;

const postComment = async (req, res) => {
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
    const {
      dataValues: {
        id,
        nickname
      }
    } = await users.findOne({
      where: {
        email
      }
    });
    const {
      content,
      contentId
    } = req.body;

    if (!content || !contentId) {
      return res.status(400).json({
        message: "댓글을 입력해 주세요"
      });
    }

    const Comment = await comments.create({
      userId: id,
      content,
      nickname,
      contentId
    });
    res.status(201).json({
      message: "댓글 작성 성공",
      comment: Comment.dataValues
    });
  } catch (_unused) {
    res.status(500).json({
      message: "댓글 작성 실패"
    });
  }
};

exports.postComment = postComment;

const editComment = async (req, res) => {
  const {
    token
  } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "로그인 해주세요"
    });
  }

  const {
    content
  } = req.body;
  const {
    id
  } = req.params;

  if (!content) {
    return res.status(400).json({
      message: "댓글을 입력해 주세요"
    });
  }

  await comments.update({
    content
  }, {
    where: {
      id
    }
  });
  res.status(200).json({
    message: "코멘트 수정 완료 "
  });
};

exports.editComment = editComment;

const deleteComment = async (req, res) => {
  const {
    token
  } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "로그인 해주세요"
    });
  }

  const {
    id
  } = req.params;
  await comments.destroy({
    where: {
      id
    }
  });
  res.status(200).json({
    message: "코멘트 삭제 완료  "
  });
};

exports.deleteComment = deleteComment;