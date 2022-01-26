"use strict";

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContent = exports.search = exports.postContent = exports.getContent = exports.getAllContent = exports.deleteContent = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.parse-int.js");

var _index = _interopRequireWildcard(require("../../models/index"));

var _verify = require("../token/verify");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  Sequelize: {
    Op
  }
} = require("../../models");

const contents = _index.default.content;
const users = _index.default.user;
const comments = _index.default.comment;

const getAllContent = async (req, res) => {
  try {
    const rankContent = await contents.findAll({
      order: [["like", "DESC"]]
    });
    const allContent = await contents.findAll({
      order: [["id", "DESC"]]
    });
    res.status(200).json({
      allContent,
      rankContent
    });
  } catch (_unused) {
    res.status(500).json({
      message: "전체 글 목록 조회 실패"
    });
  }
};

exports.getAllContent = getAllContent;

const postContent = async (req, res) => {
  try {
    const {
      token
    } = req.cookies;
    const {
      title,
      content,
      nickName
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
      userId: userInfo.id,
      nickName,
      title,
      content,
      img: req.files ? req.files[0].path : null
    });

    if (contentInfo) {
      res.status(201).json({
        message: "글 작성 완료",
        contentInfo
      });
    } else {
      res.status(400).json({
        message: "글 작성 실패"
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "글 작성 실패"
    });
  }
};

exports.postContent = postContent;

const getContent = async (req, res) => {
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
    await visitCnt.increment("visit");
    res.status(200).json({
      message: "게시글 내용 조회 및 방문자 수 증가 ",
      visitCnt
    });
  } catch (_unused2) {
    res.status(500).json({
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
      title,
      content
    } = req.body;
    const {
      files
    } = req;
    if (!files) await contents.update({
      title,
      content
    }, {
      where: {
        id
      }
    });else await contents.update({
      title,
      img: files[0].path,
      content
    }, {
      where: {
        id
      }
    });
    res.status(200).json({
      message: "글 수정 완료"
    });
  } catch (_unused3) {
    res.status(500).json({
      message: "글 수정 실패"
    });
  }
};

exports.updateContent = updateContent;

const deleteContent = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    await contents.destroy({
      where: {
        id
      }
    });
    res.status(201).json({
      message: "글 삭제 완료"
    });
  } catch (e) {
    res.status(500).json({
      message: "글 삭제 실패"
    });
  }
};

exports.deleteContent = deleteContent;

const search = async (req, res) => {
  try {
    const {
      type,
      value
    } = req.query;
    let finder = {};
    finder[type] = {
      [Op.like]: "%".concat(value, "%")
    };
    const result = await contents.findAll({
      where: {
        [Op.or]: [finder]
      }
    });
    return res.status(200).json({
      result
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "왜 안 떠 "
    });
  }
};

exports.search = search;