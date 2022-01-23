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
`;

const CommentWriting = styled.input`
  text-decoration: none;
  width: 95%;

  border: 1px solid grey;
  height: 100%;
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

const NewCommentForm = ({ nowContentId }) => {
  const [newComment, setNewComment] = useState("");

  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const onClickSubmit = () => {
    const comment = {
      content: newComment,
      contentId: nowContentId,
    };
    console.log("클릭버튼");
    postComment(comment);
    window.location.reload();
  };

  return (
    <WritingAllignment>
      <CommentWriting type="text" onChange={handleChangeComment} />
      <CommentButton onClick={onClickSubmit}>등록</CommentButton>
    </WritingAllignment>
  );
};
export default NewCommentForm;
