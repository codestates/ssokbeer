import React, { useState } from "react";
import styled from "styled-components";
import { deleteComment, editComment, formatDate } from "../../api";
import { useSelector } from "react-redux";

const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  height: 80px;
  border-bottom: 1px solid #c0c1a2;
`;

const CommentAlignment = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const User = styled.div`
  font-size: 18px;
  margin-right: 10px;
  font-weight: bold;
`;
const Inform = styled.div`
  color: grey;
  font-weight: 600;
`;

const Comment = styled.div``;
const EditComment = styled.input`
  &:focus {
    outline: none;
  }
`;

const ModifyBox = styled.div`
  display: flex;
  align-items: center;
`;
const ModifyPopup = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 3px;
  cursor: grab;
  width: 50px;
  height: 50%;
`;

const SingleComment = ({ comment, getSingleData }) => {
  const state = useSelector((state) => state.allReducer);
  const [isEditing, setIsEditing] = useState(false);
  const [changeContent, setChangeContent] = useState("");
  const { nickname, createdAt, content, userId, id } = comment;

  const handleEdit = async () => {
    const change = !isEditing;
    if (!change) {
      await editComment(id, changeContent);
    }
    setChangeContent(content);
    setIsEditing(change);
    getSingleData();
  };

  const handlechangeContent = (e) => {
    setChangeContent(e.target.value);
  };

  const handleDelete = async () => {
    await deleteComment(id);
    getSingleData();
  };

  const check = parseInt(userId) === parseInt(state.userId);

  return (
    <CommentBox>
      <CommentAlignment>
        <UserBox>
          <User>{nickname}</User>
          <Inform>{formatDate(createdAt)}</Inform>
        </UserBox>
        {isEditing ? (
          <EditComment value={changeContent} onChange={handlechangeContent} />
        ) : (
          <Comment>{content}</Comment>
        )}
      </CommentAlignment>

      {check && (
        <ModifyBox>
          <ModifyPopup onClick={handleEdit}>{isEditing ? "완료" : "수정"}</ModifyPopup>
          <ModifyPopup onClick={handleDelete}>삭제</ModifyPopup>
        </ModifyBox>
      )}
    </CommentBox>
  );
};

export default SingleComment;
