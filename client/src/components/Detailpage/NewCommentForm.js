import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postComment } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setChange } from "../../action";

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
  const dispatch = useDispatch();
  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const onClickSubmit = async () => {
    const comment = {
      content: newComment,
      contentId: nowContentId,
    };
    await postComment(comment);
    dispatch(setChange());
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
