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
  const handleClickModify = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CommentBox>
      <CommentAlignment>
        <UserBox>
          <User>{comment.nickname}</User>
          <Inform>{comment.updatedAt}</Inform>
        </UserBox>
        <ModifyBox>
          <i onClick={handleClickModify} className="fas fa-ellipsis-v"></i>
          {isOpen ? <ModifyPopup>수정</ModifyPopup> : null} /* 커사멘트 아이디와 사용자가 같으면 열리는 로직 ,누르고 재
          랜더링되야하고, 바로 바껴야하고, */
        </ModifyBox>
      </CommentAlignment>
      <Comment>{comment.content}</Comment>
    </CommentBox>
  );
};

export default SingleComment;
