import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  /* border: 1px solid blue; */
  margin: 20px;
`;

const CommentAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    color: grey;
    font-size: 15px;
  }
`;
const UserBox = styled.div`
  display: flex;
`;
const User = styled.div`
  margin: 0px 8px 0px 5px;
  /* border: 1px solid red; */
`;
const Inform = styled.div`
  color: grey;
  /* border: 1px solid pink; */
  margin-left: 6px;
`;

const Comment = styled.div`
  /* border: 1px solid black; */
  font-size: 18px;
`;

const SingleComment = () => {
  return (
    <CommentBox>
      <CommentAlignment>
        <UserBox>
          <User>대충살자</User>
          <Inform>13:30</Inform>
        </UserBox>
        <i className="fas fa-ellipsis-v"></i>
      </CommentAlignment>
      <Comment>개맛잇겟당ㅋㅋ</Comment>
    </CommentBox>
  );
};

export default SingleComment;
