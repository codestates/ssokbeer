import React, { useState } from "react";
import styled from "styled-components";

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
const ModifyBox = styled.div`
  width: 45px;
  height: 50px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0px;
  i {
    text-align: right;
  }
  /* border: 1px solid blue; */
`;
const ModifyPopup = styled.button`
  padding: 5px 5px 5px 3px;
  margin: 3px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: white;
  border-radius: 3px;
  font-size: 14px;
  cursor: grab;
`;

const SingleComment = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [comment, setComment] = useState([]);

  // const handleClickModify = () => {
  // //   setIsOpen(!isOpen);
  const { nickname, createdAt, content } = comment;

  return (
    <CommentBox>
      <CommentAlignment>
        <UserBox>
          <User>{nickname}</User>
          <Inform>{createdAt}</Inform>
        </UserBox>
        <ModifyBox>
          <i className="fas fa-ellipsis-v"></i>
          {isOpen ? <ModifyPopup>수정</ModifyPopup> : null}
        </ModifyBox>
      </CommentAlignment>
      <Comment>{content}</Comment>
    </CommentBox>
  );
};

export default SingleComment;
