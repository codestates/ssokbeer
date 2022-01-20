"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContent = exports.postContent = exports.getContent = exports.getAllContent = exports.deleteContent = exports.deleteAllContent = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.parse-int.js");

var _index = _interopRequireDefault(require("../../models/index"));

var _verify = require("../token/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.default.sequelize.sync();

const contents = _index.default.contents;
const users = _index.default.users;
const comments = _index.default.comments;

const getAllContent = async (req, res) => {
  try {
    const allContent = await contents.findAll({});
    res.status(200).json({
      message: "전체 글 목록 조회",
      allContent
    });
  } catch (_unused) {
    res.status(400).json({
      message: "전체 글 목록 조회 실패"
    });
  }
};

exports.getAllContent = getAllContent;

const postContent = async (req, res) => {
  const {
    token
  } = req.cookies;
  const {
    img,
    content
  } = req.body;
  const {
    email
  } = (0, _verify.verify)(token);
  const userInfo = await users.findOne({
    where: {
      email
    }
  });
  const contentInfo = await contents.create({
    usersId: userInfo.id,
    img,
    content
  });

  if (contentInfo) {
    res.status(200).json({
      message: "글 작성 완료",
      contentInfo
    });
  } else {
    res.status(400).json({
      message: "글 작성 실패"
    });
  }
};

exports.postContent = postContent;

const getContent = async (req, res) => {
  //   await content.create({
  //     content: "폭군 김모군",
  //   });
  try {
    const {
      id
    } = req.params;
    let visitCnt = await contents.findOne({
      where: {
        id
      },
      include: {
        model: comments
      }
    });
    await visitCnt.increment("visits");
    res.status(200).json({
      message: "게시글 내용 조회 및 방문자 수 증가 ",
      visitCnt
    });
  } catch (_unused2) {
    res.status(400).json({
      message: "게시글 내용 조회 및 방문실패"
    });
  }
};

exports.getContent = getContent;

const updateContent = async (req, res) => {
  try {
    let {
      id
    } = req.params;
    id = parseInt(id);
    const {
      img,
      content
    } = req.body;
    const contentInfo = await contents.update({
      img,
      content
    }, {
      where: {
        id
      }
    });
    res.status(200).json({
      message: "글 수정 완료 ",
      contentInfo
    });
  } catch (_unused3) {
    res.status(400).json({
      message: "글 수정 실패 "
    });
  }
};

exports.updateContent = updateContent;

const deleteContent = async (req, res) => {
  const {
    id
  } = req.params;
  await contents.destroy({
    where: {
      id
    }
  });
  res.status(200).json({
    message: "글 삭제 완료"
  });
};

exports.deleteContent = deleteContent;

const deleteAllContent = async (req, res) => {};

exports.deleteAllContent = deleteAllContent;