import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TimeCounting from "time-counting";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { postComment } from "../../api";

const WritingAllignment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0px 0px 20px 0px;
`;

const CommentWriting = styled.input`
  text-decoration: none;
  width: 95%;

  border: 1px solid grey;
  height: 30px;
  &:focus {
    outline: none;
  }
`;

const CommentButton = styled.button`
  all: unset;
  color: black;
  padding: 8px 8px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
  width: 35px;
  text-align: center;
  &:hover {
    background-color: #fed969;
  }
`;

const NewCommentForm = ({ nowContentId, nowUserId }) => {
  const [newComment, setNewComment] = useState("");

  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const onClickSubmit = async () => {
    const comment = {
      content: newComment,
      contentId: nowContentId,
    };
    console.log("클릭버튼");
    await postComment(comment);
    window.location.reload();
  };

  return (
    <WritingAllignment>
      <CommentWriting
        type="text"
        onChange={handleChangeComment}
        placeholder={!nowUserId && "댓글을 작성 하려면 로그인 하세요"}
      />
      <CommentButton onClick={onClickSubmit}>등록</CommentButton>
    </WritingAllignment>
  );
};
export default NewCommentForm;
